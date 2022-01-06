import React, {useEffect} from 'react';
import Profile from '../Profile/Profile';
import {connect} from 'react-redux';
import {getUserProfile, ProfileResponsePropsType} from '../../Redux/Profile-reducer';
import {ReduxStateType} from '../../Redux/redux-store';
import {useParams} from 'react-router-dom';
import {WithAuthRedirect} from '../../HOC/WithAuthRedirect';


export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    profile: ProfileResponsePropsType
}
type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
}
type PropsType = ProfileContainerPropsType


const ProfileContainer = (props: PropsType) => {
    const {profile, getUserProfile} = props

    let {userId} = useParams()
    useEffect(() => {
        if (!userId) {
            userId = '2'
        }
        getUserProfile(userId)
    }, [])

    return (
        <Profile {...props} profile={profile}/>
    )


}

let mapStateToProps = (state: ReduxStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})

export default WithAuthRedirect(connect(mapStateToProps, {getUserProfile})(ProfileContainer));
