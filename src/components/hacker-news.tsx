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
    // const { topStoriesIds, loading } = useHackerNewsTopStories(hackerNewsService);
    // const tenRandomizedTopStories: number[] = shuffleArray(topStoriesIds).slice(0, MAX_TOP_STORIES_TO_RETRIEVE);

      React.useEffect(() => {
        async function getTopStories() {
            const url = "https://hacker-news.firebaseio.com/v0/topstories.json";
            try {
              const response = await fetch(url);
              if (response.ok === false) {
                throw new Error("Response Error:" + response.text);
              }
              const json = await response.json();

              const promises = shuffleArray(json)
                .slice(0, 10)
                .map((id: number) =>
                  fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
                    response => response.json()
                  )
                );
              const result = await Promise.all(promises);
              return result;
            } catch (err) {
              console.error(err);
            }
          }
          setStories(getTopStories().then(a => console.log(a)));
          console.log(stories)
      }, [])
    return (
        <section>123</section>
    )
};

export default HackerNews;
