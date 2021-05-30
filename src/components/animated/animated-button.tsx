import * as React from 'react';
import AnimatedSvgLine from './animated-svg-line';

interface IAnimatedButton {
    text: string,
    onClick:() => void,
}

const AnimatedButton: React.FC<IAnimatedButton> = ({ text, onClick }) => (
    <button onClick={onClick} className="animated-button">
        <AnimatedSvgLine text={text} />
    </button>
);

export default AnimatedButton;
