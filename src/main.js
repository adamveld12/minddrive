import ReactDOM from 'react-dom';
import routes from './routes';
import './fa';
import './main.less';


ReactDOM.render(
    routes(),
    document.getElementById('app'),
);
