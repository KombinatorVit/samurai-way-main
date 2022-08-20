import {PostType} from './store';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';


let initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: 'Dmitry',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'},
        },
        {
            id: 1,
            followed: true,
            fullName: 'Vital',
            status: 'I am a boss too',
            location: {city: 'Dnipro', country: 'Ukraine'},
        },
        {
            id: 1,
            followed: false,
            fullName: 'Sasha',
            status: 'I am a boss too',
            location: {city: 'Warszawa', country: 'Poland'},
        },
    ],
};


const usersReducer = (state: any = initialState, action: any) => {

    switch (action.type) {
        case FOLLOW:


        default:
            return state;
    }
};


export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    };
};

export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    };
};


export default usersReducer;