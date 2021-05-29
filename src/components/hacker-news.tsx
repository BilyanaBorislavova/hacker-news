import * as React from 'react';
import useFetch, { FetchContext } from 'use-http';
import useHackerNewsStory from '../hooks/use-hacker-news-story';
import useHackerNewsTopStories from '../hooks/use-hacker-news-top-stories';
import HackerNewsService from '../services/hacker-news-service';
import { shuffleArray } from '../utils/array-utils';

const MAX_TOP_STORIES_TO_RETRIEVE = 10;

const HackerNews = () => {
    const hackerNewsService = new HackerNewsService();
    const [ stories, setStories ] = React.useState<any>([]);
    const { topStoriesIds } = useHackerNewsTopStories(hackerNewsService);
    const tenRandomizedTopStories: any = shuffleArray(topStoriesIds).slice(0, MAX_TOP_STORIES_TO_RETRIEVE)
        .map((id: number) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
          response => response.json()
        )
      );
    const result = Promise.all(tenRandomizedTopStories).then(data => data);
    console.log(result)
      React.useEffect(() => {
        
      }, [])
    return (
        <section>123</section>
    )
};

export default HackerNews;
