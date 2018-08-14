import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Card.less';
import Tags from '../Tags/Tags';
import Page from './Page';

const {
    card,
    contentsection,
    headsection,
    icon,
    titlesection,
    page,
    ctrlpanel,
} = styles;
class Card extends Component {
    static propTypes = {
        onDelete: PropTypes.func.isRequired,
        onEdit: PropTypes.func.isRequired,
        onShare: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired,
        pages: PropTypes.arrayOf({
            content: PropTypes.string.isRequired,
            type: PropTypes.oneOf(['image', 'text']),
        }).isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    };

    constructor() {
        super();
        this.state = { expanded: false };
    }

    render() {
        const {
            title,
            pages,
            tags,
            onEdit,
            onDelete,
            onShare,
        } = this.props;
        return (
            <div className={card}>
                <header className={headsection}>
                    <div className={titlesection}>
                        <h2> {title} </h2>
                        <div className={ctrlpanel}>
                            <FontAwesomeIcon className={icon} icon="edit" onClick={() => onEdit()} />
                            <FontAwesomeIcon className={icon} icon="share" onClick={() => onShare()} />
                            <FontAwesomeIcon className={icon} icon="trash" onClick={() => onDelete()} />
                        </div>
                    </div>
                    <Tags tags={tags} />
                </header>
                <section className={contentsection}>
                    {pages.map(x => <Page key={x.content} {...x} />)}
                </section>
            </div>
        );
    }
}


export default Card;
