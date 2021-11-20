import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY": "ae574dea-edf5-4c7b-8788-6539810f37f7"
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    setFollow(userId){
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    },
    setUnfollow(userId){
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    },
    setUserProfile(userId){
        return instance.get(`profile/` + userId)
        .then(response=>response.data)
    },
    authMe(){
        return instance.get(`auth/me`)
        .then(response=>response.data)
    }
}


