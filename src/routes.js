import React, { Fragment } from 'react';
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import BoardPage from './pages/BoardPage';

const BoardPageRoute = props => <BoardPage {...props} />;
// const DetailPage = props => <DetailPage {...props} />;
// const BoardsPage = props => <BoardsPage {...props} />;


const browserHistory = createHistory();
export default () => (
    <Router history={browserHistory}>
        <Fragment>
            <Route exact path="/" render={BoardPageRoute} />
            <Route path="/:board" render={BoardPageRoute} />
            <Route path="/:board/:noteId" render={BoardPageRoute} />
        </Fragment>
    </Router>
);
