import {Profile} from "./Profile";
import React from "react";
import {connect} from "react-redux";
import {reducersType} from "../../redux/store";
import {getStatus, getUserProfile, setStatusType, updateStatus} from "../../redux/ProfileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
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
}

class ProfileContainer extends React.Component<PropsType, {}> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '21950'
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        return (
            <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

type MapStateToPropsType = {
    profile:string|null
    status:string
}

let mapStateToProps = (state:reducersType) : MapStateToPropsType => {
    return {

            profile:state.profilePage.profile,
            status:state.profilePage.status
    }
}


export default compose<React.ComponentType> (
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus }),
    withRouter,
    //WithAuthRedirect//
) (ProfileContainer)