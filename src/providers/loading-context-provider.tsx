import * as React from 'react';
import LoadingContext from '../context/loading-context';

interface ILoadingContextProvider {
    children: React.ReactNode
}

const LoadingContextProvider: React.FC<ILoadingContextProvider> = ({ children }) => {
    const [ isLoadingContent, setIsLoadingContent ] = React.useState(true);

    const loadingValues = { isLoadingContent, setIsLoadingContent };

    return (
        <LoadingContext.Provider value={loadingValues}>
            {children}
        </LoadingContext.Provider>
    )
};

export default LoadingContextProvider;
