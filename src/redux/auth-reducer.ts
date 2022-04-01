import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const InitialState: InitialStateAuthType = {
        id:null,
        email:null,
        login:null,
        isAuth:false
}

export type InitialStateAuthType  = {
    id:null|number,
    email:null|string,
    login:null|string,
    isAuth:boolean,

}

export const authReducer = (state= InitialState, action:ProfileActionType):InitialStateAuthType => {

    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.payload
            }

        default: return state
    }
}
export const setUserAC = (id:null|number, email:null|string, login:null|string, isAuth:boolean)=> {
    return {
        type:"SET-USER-DATA",
        payload: {id, email, login, isAuth}
    } as const
}


export type setUserACType = ReturnType<typeof setUserAC>
export type ProfileActionType = setUserACType

//thunk
export const getAuthUserData = () => (dispatch:Dispatch) => {
    authAPI.me()
        .then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setUserAC(id, email, login, true))
        }
    })
}
export const loginUser = (email:string, password:string, rememberMe:boolean) => (dispatch:any) => {

    authAPI.login(email, password, rememberMe)
        .then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let message = response.data.message > 0 ? response.data.message[0] : "Some Error"
            dispatch(stopSubmit('login', {_error:message}))
        }
    })
}
export const logoutUser = () => (dispatch:Dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserAC(null, null, null, false))
            }
        })
}