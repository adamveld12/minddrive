import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const pageContainer = css` display: grid; `;
const imgCss = css` width: 100%; `;
const pCss = css`
    padding: 10px;
    margin: 0;
`;

const Page = ({ content, type }) => (
    <div className={pageContainer}>
        { type === 'image' && (<img className={imgCss} src={content} alt={type} />)}
        { type === 'text' && (<p className={pCss}> {content} </p>) }
    </div>
);

Page.propTypes = {
    content: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['image', 'text']).isRequired,
};

export default Page;
