import React from 'react';

import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileResponsePropsType, setUserProfile} from "../../Redux/Profile-reducer";

import {ReduxStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType
type MathType={
    userId:string
}
type MapStatePropsType ={
    profile: ProfileResponsePropsType
}
type MapDispatchPropsType ={
    setUserProfile: (data: ProfileResponsePropsType) => void
}
type PropsType = RouteComponentProps<MathType> & ProfileContainerPropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2";
        }
        axios.get<ProfileResponsePropsType>(`https://social-network.samuraijs.com/api/1.0/profile/2`  + userId )
            .then(response => {
                this.props.setUserProfile(response.data)

            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )

    }
}
let mapStateToProps = (state:ReduxStateType) => ({
    profile:state.profilePage.profile
})



let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect (mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
