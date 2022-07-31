import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import dialogsReducer from './dialogs-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    dialogsPage: dialogsReducer
});

 let store = createStore(reducers);




 export default store