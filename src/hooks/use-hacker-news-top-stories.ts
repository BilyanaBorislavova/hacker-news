import { useEffect, useState } from 'react';
import { useFetch } from 'use-http';
import HackerNewsService from '../services/hacker-news-service';

const useHackerNewsTopStories = (hackerNewsApi: HackerNewsService) => {
    const [ topStoriesIds, setTopStoriesIds ] = useState<Array<number>>([]);
    const endpoint = hackerNewsApi.getTopStoriesIds();

    const { data, loading } = useFetch(endpoint, []);
    
    const getAndSetTopStories = () => setTopStoriesIds(data);

    useEffect(() => {
        if (!loading) {
            getAndSetTopStories();
        }
    }, [ loading ]);

    return {
        topStoriesIds,
        loading,
    }
};

export default useHackerNewsTopStories;
