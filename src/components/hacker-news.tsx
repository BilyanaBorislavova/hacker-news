import * as React from 'react';
import useFetch from 'use-http';
import useHackerNewsTopStories from '../hooks/use-hacker-news-top-stories';
import HackerNewsService from '../services/hacker-news-service';
import { shuffleArray } from '../utils/array-utils';
import HackerNewsStories from './hacker-news-stories';

const MAX_TOP_STORIES_TO_RETRIEVE = 10;

const HackerNews = () => {
    const hackerNewsService = new HackerNewsService();

    const [ stories, setStories ] = React.useState<any>([]);
    const { topStoriesIds } = useHackerNewsTopStories(hackerNewsService);
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
    } 
    
    React.useEffect(() => {
        getAllStories();
    }, [ topStoriesIds ])

    return (
        <section className="hacker-news">
            <HackerNewsStories stories={stories} />
        </section>
    )
};

export default HackerNews;
