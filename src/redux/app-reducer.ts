import {getAuthUserData} from "./auth-reducer";

const InitialState: InitialStateType = {
    initialized: true
}
type InitialStateType = {
    initialized:boolean
}

export const appReducer = (state= InitialState, action:ActionType):InitialStateType => {

    switch (action.type) {


        default: return state
    }
}

const initialized = () => ({type:"SUCCESS"}as const)

type ActionType = ReturnType<typeof initialized>

export const initialisedApp = () => (dispatch:any) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then (()=>{
            dispatch(initialized())
        })
}