import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};


const authReducer = (state: any = initialState, action: any) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };


        default:
            return state;
    }
};


// @ts-ignore
export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload:
        {userId, email, login, isAuth}  });

export const getAuthUserData = () => (dispatch:any) => {
    authAPI.me()
        .then((response: any) => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
}

// @ts-ignore
export const login = (email, password, rememberMe) => (dispatch) => {
    // @ts-ignore
    authAPI.login(email, password, rememberMe)
        .then((response:any) => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        });
}

export const logout = () => (dispatch:any) => {
    // @ts-ignore
    authAPI.logout()
        .then((response:any) => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
}


export default authReducer;