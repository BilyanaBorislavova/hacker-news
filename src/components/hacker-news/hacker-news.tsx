import * as React from 'react';
import LoadingContext from '../../context/loading-context';
import useHackerNewsTopStories from '../../hooks/use-hacker-news-top-stories';
import HackerNewsService from '../../services/hacker-news-service';
import { shuffleArray } from '../../utils/array-utils';
import GlobalLoadingIndicator from '../global-loading-indicator/global-loading-indicator';
import HackerNewsStories from './hacker-news-stories';

const MAX_TOP_STORIES_TO_RETRIEVE = 10;

const HackerNews = () => {
    const hackerNewsService = new HackerNewsService();
    const { topStoriesIds } = useHackerNewsTopStories(hackerNewsService);

    const { shouldShowMainPage } = React.useContext(LoadingContext);

    const [ stories, setStories ] = React.useState<any>([]);
    const [ users, setUsers ] = React.useState<any>([]);

    const tenRandomizedTopStories: any = shuffleArray(topStoriesIds).slice(0, MAX_TOP_STORIES_TO_RETRIEVE);
    const mapStoriesAndRetrieveStoriesData = tenRandomizedTopStories
        .map((id: number) => {
            const endpoint = hackerNewsService.getStoryItemById(id);
            const stories = fetch(endpoint).then(response => response.json());
            return stories;
    });

    const getAllStories = async () => {
        const data = await Promise.all(mapStoriesAndRetrieveStoriesData);
        setStories(data);
    };

    const mapStoriesAndRetrieveUserData = stories
        .map(({ by: userId }: { by: string }) => {
            const endpoint = hackerNewsService.getUserById(userId);
            const users = fetch(endpoint).then(response => response.json());
            return users;
    });

    const getAllUsers = async () => {
        const data = await Promise.all(mapStoriesAndRetrieveUserData);
        setUsers(data);
    };

    React.useEffect(() => {
        getAllStories();
    }, [ topStoriesIds ])

    React.useMemo(() => getAllUsers(), [ stories ]);

    if (!stories.length || !shouldShowMainPage) {
        return <GlobalLoadingIndicator />
    }

    const mergedStoriesWithUsers = stories.map((item: any, i: number) => Object.assign({}, item, users[i]));

    return (
        <section className="hacker-news">
            <HackerNewsStories stories={mergedStoriesWithUsers} />
        </section>
    )
};

export default HackerNews;
