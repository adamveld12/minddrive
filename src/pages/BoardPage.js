import React, { Component } from 'react';
import { connect } from 'weedux';
import Masonry from 'react-masonry-css';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import store from '../state';
import { actions, getBoard } from '../state/board';

import Card from '../components/Card/Card';
import Nav from '../components/Nav/Nav';
import BackCrumb from '../components/BackCrumb/BackCrumb';
import BigButton from '../components/BigButton/BigButton';

const { newNote } = actions;

const boardsCss = css`
    padding: 15px 10%;
`;

const bigButtonCss = css`
    position: absolute;
    bottom: 20px;
    right: 35px;
`;

const masonryCss = css`
    margin-top: 20px;
    display: flex;
    width: auto;
`;

const cardCss = css`
    margin-bottom: 25px;
`;

const breakpointColumnsObj = {
    default: 3,
    1256: 2,
    850: 1,
    500: 1,
};

class BoardPage extends Component {
    static propTypes = {
        board: PropTypes.shape({
            title: PropTypes.string.isRequired,
            notes: PropTypes.arrayOf(PropTypes.shape({
                title: PropTypes.string.isRequired,
                pages: PropTypes.array.isRequired,
                tags: PropTypes.arrayOf(PropTypes.string).isRequired,
            })).isRequired,
            tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        }).isRequired,
        createNewNote: PropTypes.func.isRequired,
    }

    constructor() {
        super();
        this.state = {};
    }

    createNewNote = () => {
        const { createNewNote } = this.props;

        createNewNote({
            title: 'hello',
            pages: [{
                content: 'interesting content',
                type: 'text',
            }],
            tags: ['dope', 'note'],
        });
    }

    onExpand = idx => () => { console.log('expanding'); }

    render() {
        const { board: { title, notes } } = this.props;
        return (
            <div>
                <Nav submitSearch={() => {}} />
                <div className={boardsCss}>
                    <BackCrumb title={title} goBack={() => {}} />
                    <Masonry breakpointCols={breakpointColumnsObj} className={masonryCss} columnClassName="my-masonry-grid_column">
                        {
                            notes.map((n, idx) => (
                                <div key={n.created} className={cardCss}>
                                    <Card
                                        onExpand={this.onExpand(idx)}
                                        onDelete={this.onExpand(idx)}
                                        onEdit={this.onExpand(idx)}
                                        onShare={this.onExpand(idx)}
                                        title={n.title}
                                        pages={n.pages}
                                        tags={n.tags}
                                    />
                                </div>
                            ))
                        }
                    </Masonry>
                    <div className={bigButtonCss}>
                        <BigButton onClick={this.createNewNote} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    const { match: { params } } = props;
    const boardName = params.board;
    const board = getBoard(state, boardName);
    return { board };
};

const mapDispatchToProps = d => ({
    createNewNote: payload => d(newNote(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps, store)(BoardPage);
