import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './BigButton.less';

const { bigbutton } = styles;
const BigButton = ({ onClick }) => (
    <button type="button" className={bigbutton} onClick={onClick}>
        <FontAwesomeIcon className="fa-lg" icon="plus" />
    </button>
);

BigButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default BigButton;
