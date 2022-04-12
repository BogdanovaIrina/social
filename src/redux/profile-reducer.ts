import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

export type PostType = {
    id? : number
    post: string
    likesCount: number
}

const InitialState: InitialStateProfileType = {
        posts : [
            {id: 1, post: 'Hi, how are you', likesCount: 3},
            {id: 2, post: "I'm fine and you" , likesCount: 5}
        ],
        profile:null,
        status:''
}

export type InitialStateProfileType  = {
    posts: Array<PostType>
    profile:string | null
    status: string

}

export const profileReducer = (state= InitialState, action:ProfileActionType):InitialStateProfileType => {

    switch (action.type) {

        case "ADD-FULL-POST":
            return {
                ...state,
                posts: [...state.posts, {id: 3, post: action.newPost, likesCount: 0}]
            }
        case "USER-PROFILE":
            return {
                ...state,
                profile  : action.payload.profile
            }
        case "SET-STATUS":
            return {
                ...state, status: action.payload.status
            }
        default: return state
    }
}

export const addPostAC = (newPost:string) => {
    return {
        type:"ADD-FULL-POST",
        newPost
    } as const
}

export const setUserProfile = (profile:any)=> {
    return {
        type:"USER-PROFILE",
        payload: {
            profile
        }
    } as const
}

export const setStatus = (status:string)=> {
    return {
        type:"SET-STATUS",
        payload: {
            status
        }
    } as const
}



export type AddPostACType = ReturnType<typeof addPostAC>

export type setUserProfileType = ReturnType<typeof setUserProfile>

export type setStatusType  = ReturnType<typeof setStatus>

export type ProfileActionType = AddPostACType | setUserProfileType | setStatusType

//thunk
export const getUserProfile = (userId:string) => (dispatch:Dispatch) => {
    usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
    })
}

export const getStatus = (userId:string) => (dispatch:Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
           dispatch(setStatus(response.data))
        })
}

export const updateStatus = (status:string) => (dispatch:Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) dispatch(setStatus(status))
        })
}
