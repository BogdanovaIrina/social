import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialog-reducer";
import {userReducer} from "./user-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer} from 'redux-form'
import {appReducer} from "./app-reducer";

let reducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    users:userReducer,
    auth:authReducer,
    form: formReducer,
    app:appReducer
})

export let store = createStore(reducer, applyMiddleware(thunkMiddleware))

export type reducersType = ReturnType<typeof reducer>


//@ts-ignore
window.store = store