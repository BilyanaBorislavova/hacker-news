import * as React from 'react';
import HackerNewsStoryCard from './hacker-news-story-card';

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
                        <HackerNewsStoryCard
                          title={story.title}
                          time={story.time}
                          score={story.score}
                          authorId="12"
                          authorKarmaScore={123}
                          url={story.url}
                        />
                    </li>)
                )
            }
        </ul>
    </section>
);

export default HackerNewsStories;
