import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {addMessageAC, InitialStateDialogType} from "../../redux/dialog-reducer";
import {reducersType} from "../../redux/store";
import {compose, Dispatch} from "redux";
import React from "react";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

type MapStateToPropsType = {
    dialogs:InitialStateDialogType
}

type MapDispatchToPropsType = {
    itog: (newMessage:string) => void
}

export type DialogsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state:reducersType) : MapStateToPropsType => {
    return {
        dialogs : state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch) : MapDispatchToPropsType => {
     return {
         itog : (newMessage:string) => {
             dispatch(addMessageAC(newMessage))
         }
    }
}

export default compose<React.ComponentType> (
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
) (Dialogs)

