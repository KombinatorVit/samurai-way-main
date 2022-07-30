import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import store from './redux/state';


export let rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}/></BrowserRouter>,
        document.getElementById('root')
    );
};
// addPost('Hello Man')

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree)