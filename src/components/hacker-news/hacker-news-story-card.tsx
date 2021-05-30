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
      src="https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_960_720.png"
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
