import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import store from './redux/redux-store';
import {Provider} from 'react-redux';
import SamuraiJSApp from './App';


ReactDOM.render(<SamuraiJSApp/>, document.getElementById('root'));