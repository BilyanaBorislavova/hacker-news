import * as React from 'react';
import HackerNewsStory from './hacker-news-story';

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
}

const HackerNewsStories: React.FC<{ stories: Array<IHackerNewsStory> }> = ({ stories }) => (
    <section className="hacker-news-stories">
        <ul className="hacker-news-stories-list">
            {
                stories.map((story: IHackerNewsStory) => (
                    <li key={story.id} className="hacker-news-stories-list-item">
                        <HackerNewsStory {...story} />
                    </li>)
                )
            }
        </ul>
    </section>
);

export default HackerNewsStories;
