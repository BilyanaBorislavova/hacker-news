import "./hacker-news-story-card.scss";

import * as React from "react";

interface IHackerNewsStoryCard {
  title: string;
  time: number;
  score: number;
  authorId: string;
  authorKarmaScore: number;
  url: string;
}

const HackerNewsStoryCard: React.FC<IHackerNewsStoryCard> = ({
  title,
  time,
  score,
  authorId,
  authorKarmaScore,
  url,
}) => (
  <section className="hacker-news-story-card">
    <img
      className="hacker-news-story-card-image"
      src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
    />
    <article className="hacker-news-story-card-content">
      <h1 className="hacker-news-story-card-content-title">{title}</h1>
      <p className="hacker-news-story-card-content-timestamp">
        Timestamp: {time}
      </p>
      <p className="hacker-news-story-card-content-score">Score: {score}</p>
    </article>
    <article className="hacker-news-story-card-info">
      <h1 className="hacker-news-story-card-info-title">{title}</h1>
      <p className="hacker-news-story-card-info-timestamp">Timestamp: {time}</p>
      <p className="hacker-news-story-card-info-score">Score: {score}</p>
      <p className="hacker-news-story-card-info-author">
        <span>Author id: {authorId}</span>
        <span>Author karma score: {authorKarmaScore}</span>
      </p>
      <a href={url} className="hacker-news-story-card-url">
        Story URL
      </a>
    </article>
  </section>
);

export default HackerNewsStoryCard;
