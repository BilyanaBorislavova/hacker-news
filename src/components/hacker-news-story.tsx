import * as React from 'react';

interface IHackerNewsStory {
    by: string,
    descendants: number,
    id: number,
    kids: Array<number>,
    score: number,
    time: number,
    title: string,
    type: string,
    url: string,
    user: string,
}

const HackerNewsStory:React.FC<IHackerNewsStory> = ({ descendants, id, score, time, title, type, url, user }) => (
    <article className="hacker-news-story">

    </article>
);

export default HackerNewsStory