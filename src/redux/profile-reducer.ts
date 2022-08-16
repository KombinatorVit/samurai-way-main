import {PostType} from './store';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It"s my first post!', likesCount: 11},
        {id: 3, message: 'My Friend!', likesCount: 1},
        {id: 4, message: 'You good !', likesCount: 10},
        {id: 5, message: 'Yo Yo Y Yo Yo', likesCount: 9},
    ],
    newPostText: 'it-kamasutra'
};


const profileReducer = (state: any = initialState, action: any) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {

            let stateCopy = {...state};

            stateCopy.newPostText = action.newText;
            return stateCopy;
        }

        default:
            return state;
    }
};


export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    };
};

export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    };
};


export default profileReducer;