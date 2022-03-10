import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogReducer";
import {userReducer} from "./UserReducer";
import {authReducer} from "./AuthReducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer} from 'redux-form'

let reducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    users:userReducer,
    auth:authReducer,
    form: formReducer
})

export let store = createStore(reducer, applyMiddleware(thunkMiddleware))

export type reducersType = ReturnType<typeof reducer>


//@ts-ignore
window.store = store