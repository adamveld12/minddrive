import React, { Component } from 'react';
import { connect } from 'weedux';
import Masonry from 'react-masonry-css';
import store from '../state';


class BoardPage extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Masonry breakpointCols={3} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                {/* array of JSX items */}
            </Masonry>
        );
    }
}


export default connect(() => {}, () => {}, store)(BoardPage);
