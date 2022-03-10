import {changeCurrentPage, following, followThunk, getUsers, InitialStateUserType, loading, unfollowThunk,} from "../../redux/UserReducer";
import {reducersType} from "../../redux/store";
import {connect} from "react-redux";
import React from "react";
import {Users} from "./Users";
import src from "../../images/spin.gif";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

interface MyProps {
    unfollowThunk: (id:number) => void
    followThunk: (id:number) => void
    users:InitialStateUserType
    changeCurrentPage: (currentpage: number) => void
    isLoading:boolean
    loading: (isLoading:boolean) => void
    following: (isFollowing:boolean) => void
    getUsers: (currentpage:number, pagesize:number) => void
}

class ClassUsers extends React.Component<MyProps> {

    componentDidMount() {
        this.props.getUsers(this.props.users.currentpage, this.props.users.pagesize)
    }

    onPageChanged = (pagenumber:number) => {
        this.props.getUsers(pagenumber, this.props.users.pagesize)
    }

    render() {

        return <>

            {this.props.isLoading? <img src={src} alt=''/>:''}

            <Users onPageChanged={this.onPageChanged}
                   userscount={this.props.users.userscount}
                   pagesize={this.props.users.pagesize}
                   currentpage={this.props.users.currentpage}
                   users={this.props.users}
                   following={this.props.following}
                   unfollowThunk={this.props.unfollowThunk}
                   followThunk={this.props.followThunk}

            />
        </>
    }
}


type MapStateToPropsType = {
    users: InitialStateUserType
    pagesize: number
    userscount: number
    currentpage:number
    isLoading: boolean
    isFollowing:boolean

}


let mapStateToProps = (state:reducersType) : MapStateToPropsType => {
    return {
        users : state.users,
        pagesize: state.users.pagesize,
        userscount: state.users.userscount,
        currentpage: state.users.currentpage,
        isLoading: state.users.isLoading,
        isFollowing:state.users.isFollowing,

    }
}

export default compose<React.ComponentType> (
    connect(mapStateToProps, {
    unfollowThunk,
    followThunk,
    changeCurrentPage,
    loading,
    following,
    getUsers
}), WithAuthRedirect) (ClassUsers)