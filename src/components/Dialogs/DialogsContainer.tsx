import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {addMessageAC, changeMessageAC, InitialStateDialogType} from "../../redux/DialogReducer";
import {reducersType} from "../../redux/store";
import {compose, Dispatch} from "redux";
import React from "react";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

type MapStateToPropsType = {
    dialogs:InitialStateDialogType
}

type MapDispatchToPropsType = {
    vvod: (text:string) => void
    itog: () => void
}

export type DialogsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state:reducersType) : MapStateToPropsType => {
    return {
        dialogs : state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch) : MapDispatchToPropsType => {
     return {
         vvod : (text) => {
            dispatch(changeMessageAC(text))
         },
         itog : () => {
             dispatch(addMessageAC())
         }
    }
}

export default compose<React.ComponentType> (
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
) (Dialogs)

