import React from "react";
import {Header} from "./Header";
import {reducersType} from "../../redux/store";
import {connect} from "react-redux";
import {getAuthUserData, logoutUser} from "../../redux/auth-reducer";

interface MyProps {}

class ClassHeader extends React.Component<MyProps, {}> {

    render() {
        return <Header {...this.props}/>
    }
}

type MapStateToPropsType = {
    login:null|string,
    isAuth:boolean,
}


let mapStateToProps = (state:reducersType) : MapStateToPropsType => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login,
})
export const HeaderContainer = connect(mapStateToProps, {logoutUser})(ClassHeader)
