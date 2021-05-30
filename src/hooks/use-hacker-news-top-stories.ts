import { useEffect, useState } from 'react';
import { useFetch } from 'use-http';
import HackerNewsService from '../services/hacker-news-service';

const useHackerNewsTopStories = (service: HackerNewsService) => {
    const [ topStoriesIds, setTopStoriesIds ] = useState<Array<number>>([]);
    const endpoint = service.getTopStoriesIds();

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
