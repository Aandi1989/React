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
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.setUserProfile(userId);
    }
}

export const authAPI={
    me(){
        return instance.get(`auth/me`)
        .then(response=>response.data)
    },
    login(email, password, rememberMe){
        return instance.post(`auth/login`, {email, password, rememberMe})
        .then(response=>response.data)
    },
    logout(){
        return instance.delete(`auth/login`)
        .then(response=>response.data)
    }
}

export const profileAPI = {
    
    setUserProfile(userId){
        return instance.get(`profile/` + userId)
        .then(response=>response.data)
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status})
    }
}


