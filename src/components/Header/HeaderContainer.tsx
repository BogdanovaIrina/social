import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {reducersType} from "../../redux/store";
import {connect} from "react-redux";
import {getAuthUserData, setUserAC} from "../../redux/AuthReducer";
import {authAPI} from "../../api/api";

interface MyProps {
    setUserAC:(id:number, email:string, login:string) => void
    getAuthUserData : () => void
}

class ClassHeader extends React.Component<MyProps, {}> {

    componentDidMount() {
       this.props.getAuthUserData()
    }

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
export const HeaderContainer = connect(mapStateToProps, {setUserAC, getAuthUserData})(ClassHeader)
