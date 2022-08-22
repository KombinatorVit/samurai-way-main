import * as axios from 'axios';


// @ts-ignore
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "17d54870-a5d6-48a5-87bc-30e6241cf46f"
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response: any) => {
                return response.data;
            });
    },

    follow(userId:number) {
        return instance.post(`follow/${userId}`)    },
    unfollow(userId:number) {
        return instance.delete(`follow/${userId}`)    },
    getProfile(userId:number) {
        return instance.get(`profile/` + userId);
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }


}
