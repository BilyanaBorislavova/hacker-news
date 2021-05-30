import './styles/styles.scss';

import * as React from 'react';
import HackerNews from './components/hacker-news/hacker-news';
import LoadingContextProvider from './providers/loading-context-provider';

const App = () => (
    <LoadingContextProvider>
        <section className="page-content-wrapper">
            <HackerNews />
        </section>
    </LoadingContextProvider>
)

export default App;
