import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './BackCrumb.less';


const { backcrumb, icon } = styles;
const BackCrumb = ({ goBack, title }) => (
    <a className={backcrumb} onClick={() => goBack()}>
        <FontAwesomeIcon className={icon} icon="arrow-left" />
        <span>{title}</span>
    </a>
);

BackCrumb.propTypes = {
    goBack: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};


export default BackCrumb;
