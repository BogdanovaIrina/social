import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {Dispatch} from "redux";
import {reducersType} from "../../../redux/store";
import {addPostAC, InitialStateProfileType} from "../../../redux/profile-reducer";

type MapStateToPropsType = {
        posts:InitialStateProfileType
}

type MapDispatchToPropsType = {
    itog: (newPost:string) => void
}

export type MyPostsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state:reducersType) : MapStateToPropsType => {
    return {
        posts:state.profilePage
    }
}

let mapDispatchToProps = (dispatch: Dispatch) : MapDispatchToPropsType  => {
    return {
        itog : (newPost:string) => {
            dispatch(addPostAC(newPost))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)