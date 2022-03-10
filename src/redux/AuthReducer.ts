import {Dispatch} from "redux";
import {authAPI} from "../api/api";

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
                ...action.payload,
                isAuth:true
            }

        default: return state
    }
}
export const setUserAC = (id:number, email:string, login:string)=> {
    return {
        type:"SET-USER-DATA",
        payload: {
            id,
            email,
            login
        }
    } as const
}


export type setUserACType = ReturnType<typeof setUserAC>


export type ProfileActionType = setUserACType

//thunk
export const getAuthUserData = () => (dispatch:Dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setUserAC(id, email, login))
        }
    })
}
