import * as React from 'react';
import useHackerNewsTopStories from '../hooks/use-hacker-news-top-stories';
import HackerNewsService from '../services/hacker-news-service';

const HackerNews = () => {
    const hackerNewsService = new HackerNewsService();
    const { topStories, loading } = useHackerNewsTopStories(hackerNewsService);
    console.log(topStories, loading)
    return (
        <section>123</section>
    )
};

export default HackerNews;
