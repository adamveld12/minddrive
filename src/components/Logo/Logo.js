import React from 'react';
import styles from './Logo.less';

const { logo, first, second } = styles;

const Logo = () => (
    <div className={logo}>
        <span className={first}>Mind</span>
        <span className={second}>Drive</span>
    </div>
);

export default Logo;
