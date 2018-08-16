import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import styles from './Nav.less';
import SearchInput from '../SearchInput/SearchInput';

const { navbar, expanded } = styles;
const Nav = ({ submitSearch, expand }) => (
    <div className={`${navbar} ${expand && expanded}`}>
        <Logo />
        <SearchInput onSubmit={submitSearch} />
    </div>
);

Nav.propTypes = {
    submitSearch: PropTypes.func.isRequired,
    expand: PropTypes.bool,
};

Nav.defaultProps = {
    expand: false,
};


export default Nav;
