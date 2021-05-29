import { useEffect, useState } from 'react';
import { useFetch } from 'use-http';
import HackerNewsService from '../services/hacker-news-service';

const useHackerNewsTopStories = (hackerNewsApi: HackerNewsService) => {
    const [ topStories, setTopStories ] = useState<Array<number>>([]);
    const endpoint = hackerNewsApi.getTopStoriesIds();

    const { data, loading } = useFetch(endpoint, []);
    
    const getAndSetTopStories = () => setTopStories(data);

    useEffect(() => {
        if (!loading) {
            getAndSetTopStories();
        }
    }, [ loading ]);

    return {
        topStories,
        loading,
    }
};

export default useHackerNewsTopStories;
