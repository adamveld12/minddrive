import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'weedux';
import { css } from 'emotion';
import BoardCard from '../components/BoardCard/BoardCard';

class BoardsPage extends Component {
    static propTypes = {
        boards: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            img: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            noteCount: PropTypes.number.isRequired,
            tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        })).isRequired,
    }

    newBoard = ({ title, tags }) => {

    }

    deleteBoard = ({ id }) => {

    }

    render() {
        const { boards } = this.props;

        return (
            <div>
                <ul>
                    {
                        boards.map(b => (
                            <li key={b.id}>
                                <BoardCard {...b} onDelete={() => this.deleteBoard(b.id)} />
                            </li>
                        ))
                    }
                </ul>
            </div>

        );
    }
}

const mapStateToProps = () => {

};

const mapDispatchToProps = () => {

};


export default connect(mapStateToProps, mapDispatchToProps)(BoardsPage);
