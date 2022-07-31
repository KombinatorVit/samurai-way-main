import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import store from './redux/redux-store';


export let rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store}/></BrowserRouter>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(()=>{
    let state = store.getState()
    rerenderEntireTree(state)
})