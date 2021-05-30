import hackerIcon from '../../assets/icons/hacker.svg';

import React from 'react';
import SvgIcon from './svg-icon';

interface IIcon { className?: string }

const HackerIcon: React.FC<IIcon> = ({ className }) => <SvgIcon className={className} src={hackerIcon} />;

export {
    HackerIcon,
};
