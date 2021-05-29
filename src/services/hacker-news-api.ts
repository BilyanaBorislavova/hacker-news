class HackerNewsApi {
    hackerNewsApi: string;
    hackerNewsTopStoriesQuery: string;
    hackerNewsTopStoriesApi: string;

    constructor() {
        this.hackerNewsApi = 'https://hacker-news.firebaseio.com/v0/';
        this.hackerNewsTopStoriesQuery = 'topstories.json';
        this.hackerNewsTopStoriesApi = `${this.hackerNewsApi}${this.hackerNewsTopStoriesQuery}`;
    }

    getTopStories = () => this.hackerNewsTopStoriesApi;

    getStoryItemById = (id: number) => `${this.hackerNewsApi}/item/${id}.json`;

    getUserById = (id: number) => `${this.hackerNewsApi}/user/${id}.json`;
}

export default HackerNewsApi;
