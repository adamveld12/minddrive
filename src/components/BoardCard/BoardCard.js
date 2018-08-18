import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import placeholder from './download.svg';
import Tags from '../Tags/Tags';
import styles from './BoardCard.less';


const {
    container, imgContainer, icon, titlesection,
} = styles;

const BoardCard = ({
    id, title, img, noteCount, tags, onDelete,
}) => (
    <div className={container}>
        <div className={imgContainer}>
            <img src={img || placeholder} alt={title} />
        </div>
        <header>
            <div className={titlesection}>
                <h2>{title}</h2>
                <FontAwesomeIcon className={icon} icon="trash" />
            </div>
            <p>{noteCount} note(s)</p>
            <Tags tags={tags} />
        </header>
    </div>
);


BoardCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    noteCount: PropTypes.number.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    onDelete: PropTypes.func.isRequired,
};


export default BoardCard;
