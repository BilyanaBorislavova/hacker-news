import './styles/styles.scss';

import * as React from 'react';
import HackerNews from './components/hacker-news/hacker-news';
import LoadingContextProvider from './providers/loading-context-provider';

const App = () => (
    <LoadingContextProvider>
        <HackerNews />
    </LoadingContextProvider>
)

export default App;
