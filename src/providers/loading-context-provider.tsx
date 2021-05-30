import * as React from 'react';
import LoadingContext from '../context/loading-context';

interface ILoadingContextProvider {
    children: React.ReactNode
}

const LoadingContextProvider: React.FC<ILoadingContextProvider> = ({ children }) => {
    const [ isLoadingContent, setIsLoadingContent ] = React.useState(true);
    const [ shouldShowMainPage, setShouldShowMainPage ] = React.useState(false);

    const loadingValues = {
        isLoadingContent,
        setIsLoadingContent,
        shouldShowMainPage,
        setShouldShowMainPage,
    };

    return (
        <LoadingContext.Provider value={loadingValues}>
            {children}
        </LoadingContext.Provider>
    )
};

export default LoadingContextProvider;
