type MessagesType = {
    id: number
    message: string
}
type DialogsType = {
    id: number
    name: string
}
type PostType = {
    id: number
    message: string
    likesCount: number
}
type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>

}

type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType

}
//

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let store = {
    _state: {
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
        }

    },

    _callSubscriber(props: any) {
        console.log('State is changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },



    dispatch(action: any){
    if(action.type === 'ADD-POST'){
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
} else if (action.type ==='UPDATE-NEW-POST-TEXT'){
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
    }
    }
};


 export const addPostActionCreator = () => {
     return {
        type: ADD_POST
    };
};

export const updateNewPostTextActionCreator = (text: any) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};

export default store;
