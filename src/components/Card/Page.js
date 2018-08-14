import React from 'react';
import PropTypes from 'prop-types';

import styles from './Page.less';

const { pagecontainer } = styles;
const Page = ({ content, type }) => (
    <div className={pagecontainer}>
        { type === 'image' && (<img src={content} alt={type} />)}
        { type === 'text' && (<p> {content} </p>) }
    </div>
);

Page.propTypes = {
    content: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['image', 'text']).isRequired,
};

export default Page;
