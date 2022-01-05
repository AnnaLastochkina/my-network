import React from 'react';

import Profile from "./Profile";

import {connect} from "react-redux";
import {getUserProfile, ProfileResponsePropsType} from "../../Redux/Profile-reducer";

import {ReduxStateType} from "../../Redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType
type MathType={
    userId:string
}
type MapStatePropsType ={
    profile: ProfileResponsePropsType
}
type MapDispatchPropsType ={
    getUserProfile: (userId:string) => void
    isAuth:boolean
}
type PropsType = RouteComponentProps<MathType> & ProfileContainerPropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2";
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"}/>
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )

    }
}
let mapStateToProps = (state:ReduxStateType) => ({
    profile:state.profilePage.profile,
    isAuth: state.auth.isAuth
})



let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect (mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
