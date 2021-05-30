import './animated-svg-line.scss';

import * as React from 'react';

const AnimatedSvgLine: React.FC<{ text: string }> = ({ text }) => (
    <section className="animated-svg-line">
        <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
          <rect className="shape" height="60" width="320" />
        </svg>
        <article className="animated-svg-line-text">
            {text}
        </article>
    </section>
);

export default AnimatedSvgLine;
