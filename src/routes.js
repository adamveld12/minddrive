import React, { Fragment } from 'react';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import BoardPage from './pages/BoardPage';

const BoardPageRoute = props => <BoardPage {...props} />;


const browserHistory = createHistory();
export default () => (
    <Router history={browserHistory}>
        <Fragment>
            <Route exact path="/" render={BoardPageRoute} />
        </Fragment>
    </Router>
);
