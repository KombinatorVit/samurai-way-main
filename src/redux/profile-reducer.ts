import {PostType} from './store';
import {profileAPI, usersAPI} from "../api/api";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It"s my first post!', likesCount: 11},
        {id: 3, message: 'My Friend!', likesCount: 1},

    ],
    newPostText: 'it-kamasutra',
    profile: null,
    status: ""
};


const profileReducer = (state: any = initialState, action: any) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
          return  {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }

        default:
            return state;
    }
};


export const addPostActionCreator = (newPostText:any) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile:any) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status:any) => ({type: SET_STATUS, status})

export const getUserProfile = (userId:number) => (dispatch:any) => {
    usersAPI.getProfile(userId).then((response:any) => {
        dispatch(setUserProfile(response.data));
    });
}

export const getStatus = (userId:number) => (dispatch:any) => {
    profileAPI.getStatus(userId)
        .then((response:any) => {
            dispatch(setStatus(response.data));
        });
}

export const updateStatus = (status:any) => (dispatch:any) => {
    profileAPI.updateStatus(status)
        .then((response:any) => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
}



export default profileReducer;
