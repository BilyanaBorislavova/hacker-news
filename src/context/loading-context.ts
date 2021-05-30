import { createContext } from 'react';

type LoadingContextTypes = {
    isLoadingContent: boolean,
    setIsLoadingContent: any,
    shouldShowMainPage: boolean,
    setShouldShowMainPage: any,
}

const loadingContextDefaultValues: LoadingContextTypes = {
    isLoadingContent: true,
    setIsLoadingContent: () => {},
    shouldShowMainPage: false,
    setShouldShowMainPage: () => {},
}

const LoadingContext = createContext<LoadingContextTypes>(loadingContextDefaultValues);

export default LoadingContext;
