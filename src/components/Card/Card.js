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
    ctrlpanel,
    expanded,
} = styles;
class Card extends Component {
    static propTypes = {
        expand: PropTypes.bool,
        onExpand: PropTypes.func.isRequired,
        onDelete: PropTypes.func.isRequired,
        onEdit: PropTypes.func.isRequired,
        onShare: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired,
        pages: PropTypes.arrayOf(PropTypes.shape({
            content: PropTypes.string.isRequired,
            type: PropTypes.oneOf(['image', 'text']),
        })).isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    };

    static defaultProps = {
        expand: false,
    };

    onExpand = () => {
        const { onExpand } = this.props;
        if (onExpand) {
            onExpand();
        }
    }

    render() {
        const {
            expand,
            title,
            pages,
            tags,
            onEdit,
            onDelete,
            onShare,
        } = this.props;

        return (
            <div className={`${card} ${expand && expanded}`}>
                <header className={headsection}>
                    <div className={titlesection}>
                        <h2> {title} </h2>
                        <Tags editable={expand} tags={tags} />
                    </div>
                    <div className={ctrlpanel}>
                        <FontAwesomeIcon className={icon} icon="expand-arrows-alt" onClick={() => this.onExpand()} />
                        <FontAwesomeIcon className={icon} icon="edit" onClick={() => onEdit()} />
                        <FontAwesomeIcon className={icon} icon="share" onClick={() => onShare()} />
                        <FontAwesomeIcon className={icon} icon="trash" onClick={() => onDelete()} />
                    </div>
                </header>
                <section className={contentsection}>
                    {pages.map(x => <Page key={x.content} {...x} />)}
                </section>
            </div>
        );
    }
}


export default Card;
