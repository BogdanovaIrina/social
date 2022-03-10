import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {Dispatch} from "redux";
import {reducersType} from "../../../redux/store";
import {addPostAC, changePostAC, InitialStateProfileType} from "../../../redux/ProfileReducer";

type MapStateToPropsType = {
        posts:InitialStateProfileType
}

type MapDispatchToPropsType = {
    vvod: (text:string) => void
    itog: () => void
}

export type MyPostsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state:reducersType) : MapStateToPropsType => {
    return {
        posts:state.profilePage
    }
}

let mapDispatchToProps = (dispatch: Dispatch) : MapDispatchToPropsType  => {
    return {
        vvod : (text) => {
            dispatch(changePostAC(text))
        },
        itog : () => {
            dispatch(addPostAC())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)