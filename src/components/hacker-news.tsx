import * as React from 'react';
import useHackerNewsTopStories from '../hooks/use-hacker-news-top-stories';
import HackerNewsService from '../services/hacker-news-service';
import { shuffleArray } from '../utils/array-utils';

const MAX_TOP_STORIES_TO_RETRIEVE = 10;

const HackerNews = () => {
    const hackerNewsService = new HackerNewsService();
    const { topStories, loading } = useHackerNewsTopStories(hackerNewsService);
    const tenRandomizedTopStories = !loading && shuffleArray(topStories).slice(0, MAX_TOP_STORIES_TO_RETRIEVE);

    return (
        <section>123</section>
    )
};

export default HackerNews;
