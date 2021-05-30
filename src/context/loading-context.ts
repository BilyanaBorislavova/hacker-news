import { createContext } from 'react';

type LoadingContextTypes = {
    isLoadingContent: boolean,
    setIsLoadingContent: any,
}

const loadingContextDefaultValues: LoadingContextTypes = {
    isLoadingContent: true,
    setIsLoadingContent: () => {}
}

const LoadingContext = createContext<LoadingContextTypes>(loadingContextDefaultValues);

export default LoadingContext;
