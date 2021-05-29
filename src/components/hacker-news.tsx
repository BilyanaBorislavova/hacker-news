import * as React from 'react';
import useHackerNewsTopStories from '../hooks/use-hacker-news-top-stories';
import HackerNewsService from '../services/hacker-news-service';
import { shuffleArray } from '../utils/array-utils';

const MAX_TOP_STORIES_TO_RETRIEVE = 10;

const HackerNews = () => {
    const hackerNewsService = new HackerNewsService();
    const { topStoriesIds, loading } = useHackerNewsTopStories(hackerNewsService);
    const tenRandomizedTopStories = !loading && shuffleArray(topStoriesIds).slice(0, MAX_TOP_STORIES_TO_RETRIEVE);
    console.log(tenRandomizedTopStories)
    return (
        <section>123</section>
    )
};

export default HackerNews;
