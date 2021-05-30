import './animated-progress-bar.scss';

import * as React from 'react';
import { Line } from 'rc-progress';
import { increaseNumber } from '../../utils/func-utils';
import LoadingContext from '../../context/loading-context';

const NUMBER_TO_INCREMENT_WITH = 1;
const TIMEOUT_IN_MS = 75;
const MAX_NUMBER_TO_INCREMENT_TO = 100;
const DEFAULT_STROKE_COLOR = '#19f6e8';
const DEFAULT_STROKE_WIDTH = 1;

interface IAnimatedProgressBar {
    children?: React.ReactNode,
    numberToIncrementTo: number,
    timeoutInMs?: number,
    text?: string,
    strokeColor?: string,
    strokeWidth?: number,
    className?: string,
}

const AnimatedProgressBar: React.FC<IAnimatedProgressBar> = ({
    children,
    numberToIncrementTo,
    timeoutInMs = TIMEOUT_IN_MS,
    strokeColor = DEFAULT_STROKE_COLOR,
    strokeWidth = DEFAULT_STROKE_WIDTH,
    className = '',
    text,
}) => {
    const { setIsLoadingContent } = React.useContext(LoadingContext);
    const [ percent, setPercent ] = React.useState(0);

    const maxNumberToIncrementTo = numberToIncrementTo
        ? numberToIncrementTo
        : MAX_NUMBER_TO_INCREMENT_TO;

    React.useEffect(() => {
        increaseNumber(percent, NUMBER_TO_INCREMENT_WITH, setPercent, timeoutInMs, maxNumberToIncrementTo);

        if (percent === MAX_NUMBER_TO_INCREMENT_TO) {
            setIsLoadingContent(false);
        }
    }, [ percent ]);

    return (
        <section className={`animated-progress-bar ${className}`}>
            <article className="animated-progress-bar-content">
                {children}
                <p className="animated-progress-bar-content-text">
                    {text}{`${percent}%`}
                </p>
            </article>
            <Line
              percent={percent}
              strokeColor={strokeColor}
              strokeWidth={strokeWidth}
              trailWidth={strokeWidth}
            />
        </section>
    );
};

export default AnimatedProgressBar;