import {PostType} from './store';
import {usersAPI} from "../api/api";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It"s my first post!', likesCount: 11},
        {id: 3, message: 'My Friend!', likesCount: 1},

    ],
    newPostText: 'it-kamasutra',
    profile: null
};


const profileReducer = (state: any = initialState, action: any) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
          return  {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {

            return  {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
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

export const getUserProfile = (userId:number) => (dispatch:any) => {
    usersAPI.getProfile(userId).then((response:any) => {
        dispatch(setUserProfile(response.data));
    });
}

export const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile})

export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    };
};


export default profileReducer;