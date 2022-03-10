import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

export type UserType = {
    id:number
    name:string
    followed:boolean
    status:string
    location:string
    photos:{small:string|null, large:string|null}
}
export type InitialStateUserType = {
    users: Array<UserType>
    pagesize: number
    userscount:number
    currentpage: number
    isLoading:boolean
    isFollowing:boolean
}

const InitialState: InitialStateUserType = {
    users: [],
    pagesize:5,
    userscount:0,
    currentpage: 2,
    isLoading: true,
    isFollowing:false,
}

export const userReducer = (state=InitialState, action:ActionUserType):InitialStateUserType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users:state.users.map(m => m.id === action.payload.userId? {...m, followed:true} : m)}
        case "UNFOLLOW":
            return {...state, users:state.users.map(m => m.id === action.payload.userId? {...m, followed:false} : m)}
        case "SET-USER":
            return {...state, users:[...action.payload.users]}
        case "CHANGE-CURRENT-PAGE":
            return {...state, currentpage:action.payload.currentpage}
        case "SET-TOTAL":
            return {...state, userscount:action.payload.totalCount}
        case "LOADING":
            return {...state, isLoading:action.payload.isLoading}
        case "FOLLOWING":
            return {...state, isFollowing:action.payload.isFollowing}
        default: return state
    }
};

export type ActionUserType = followType | unfollowType | setUserType | changeCurrentPageType | setTotalType | loadingType | followingType

export const followR = (userId: number)=> {
    return {
        type:"FOLLOW",
        payload: {
            userId
        }
    } as const
}
export type followType = ReturnType<typeof followR>

export const unfollowR = (userId: number)=> {
    return {
        type:"UNFOLLOW",
        payload: {
            userId
        }
    } as const
}
export type unfollowType = ReturnType<typeof unfollowR>

export const setUser = (users: Array<UserType>)=> {
    return {
        type:"SET-USER",
        payload: {
            users
        }
    } as const
}
export type setUserType = ReturnType<typeof setUser>

export const changeCurrentPage = (currentpage:number)=> {
    return {
        type:"CHANGE-CURRENT-PAGE",
        payload: {
            currentpage
        }
    } as const
}
export type changeCurrentPageType = ReturnType<typeof changeCurrentPage>

export const setTotal = (totalCount:number)=> {
    return {
        type:"SET-TOTAL",
        payload: {
            totalCount
        }
    } as const
}
export type setTotalType = ReturnType<typeof setTotal>

export const loading = (isLoading:boolean)=> {
    return {
        type:"LOADING",
        payload: {
            isLoading
        }
    } as const
}
export type loadingType = ReturnType<typeof loading>

export const following = (isFollowing:boolean)=> {
    return {
        type:"FOLLOWING",
        payload: {
            isFollowing
        }
    } as const
}
export type followingType = ReturnType<typeof following>


//thunk
export const getUsers= (currentpage:number, pagesize:number) => (dispatch:Dispatch) => {
    dispatch(loading(true))
    usersAPI.getUsers(currentpage, pagesize).then(data => {
        dispatch(loading(false))
        dispatch(setUser(data.items))
        dispatch(setTotal(data.totalCount))
    })
}

export const followThunk = (id:number) => (dispatch:Dispatch) => {
    usersAPI.followA(id).then(response => (response.data.resultCode === 0)? dispatch(followR(id)):null)
}

export const unfollowThunk = (id:number) => (dispatch:Dispatch) => {
    usersAPI.unfollowA(id).then(response => (response.data.resultCode === 0)? dispatch(unfollowR(id)):null)
}