import {Profile} from "./Profile";
import React from "react";
import {connect} from "react-redux";
import {reducersType} from "../../redux/store";
import {getStatus, getUserProfile, setStatusType, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type PathParams = {
    userId: string
}

type PropsType = RouteComponentProps<PathParams> & MyProps

interface MyProps {
    getUserProfile: (userId:string) => void
    profile:string|null
    status:string
    getStatus: (userId:string) => void
    updateStatus: (status:string) => void
    id:null|number
}

class ProfileContainer extends React.Component<PropsType, {}> {

    componentDidMount() {
        let userId:any= this.props.match.params.userId
        if (!userId) userId = this.props.id
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        return (
            <Profile profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        )
    }
}

type MapStateToPropsType = {
    profile:string|null
    status:string
    isAuth:boolean,
    id:null|number,
}

let mapStateToProps = (state:reducersType) : MapStateToPropsType => {
    return {

            profile:state.profilePage.profile,
            status:state.profilePage.status,
            isAuth:state.auth.isAuth,
            id:state.auth.id,
    }
}


export default compose<React.ComponentType> (
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus }),
    withRouter,
    //WithAuthRedirect//
) (ProfileContainer)