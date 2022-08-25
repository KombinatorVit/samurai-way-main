import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageBody:string

}

type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: {}
}
//
export type StoreType = {
    _state: StateType
    _callSubscriber: (any:any)=> void
    getState: ()=> void
    subscribe: (callback : ()=> void)=> void
    dispatch: (action: any)=> void
}

let store : StoreType  = {
    _state:{
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It"s my first post!', likesCount: 11},
                {id: 3, message: 'My Friend!', likesCount: 1},
                {id: 4, message: 'You good !', likesCount: 10},
                {id: 5, message: 'Yo Yo Y Yo Yo', likesCount: 9},
            ],
            newPostText: 'it-kamasutra'
        },

        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hi Hi Hi'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}],
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Vit'},
                {id: 3, name: 'Kata'},
                {id: 4, name: 'Sveta'},
                {id: 5, name: 'Bob'},
                {id: 6, name: 'Misha'}],
            newMessageBody: ''

        },
        sidebar: {},
    },

    _callSubscriber(props) {
        console.log('State is changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);


    }
};




export default store;
