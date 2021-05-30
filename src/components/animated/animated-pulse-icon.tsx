import './animated-pulse-icon.scss';

import * as React from 'react';

const animatedPulseIconClassName = 'animated-pulse-icon';

interface IAnimatedPulseIcon {
    children: React.ReactNode,
    className?: string
}

const AnimatedPulseIcon: React.FC<IAnimatedPulseIcon> = ({ className = '', children }) => (
    <article className={`${animatedPulseIconClassName} ${className}`}>
        {children}
    </article>
);

export default AnimatedPulseIcon;
