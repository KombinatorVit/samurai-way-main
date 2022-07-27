import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import state, {addPost, subscribe, updateNewPostText} from './redux/state';


export let rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}
                 updateNewPostText={updateNewPostText}
            /></BrowserRouter>,
        document.getElementById('root')
    );
};
// addPost('Hello Man')

rerenderEntireTree(state);
subscribe(rerenderEntireTree)