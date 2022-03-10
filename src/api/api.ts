import axios from "axios";

const instance = axios.create(
    {
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "e79ed137-e204-412f-b820-169b0d809599"
    }
    })

export const usersAPI = {
    getUsers (currentpage:number, pagesize:number) {
        return instance.get(`users?page=${currentpage}&count=${pagesize}`)
                        .then(response => response.data)},
    followA (id:number) {
                return instance.post(`follow/${id}`)},
    unfollowA (id:number) {
        return instance.delete(`follow/${id}`)},
    getProfile (userId:string) {
        return profileAPI.getProfile(userId)}
}

export const profileAPI = {

    getProfile (userId:string) {
        return instance.get(`profile/${userId}`)
    },
    getStatus (userId:string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus (status:string) {
        return instance.put(`profile/status`, { status })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}

