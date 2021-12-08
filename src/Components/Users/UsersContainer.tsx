import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../Redux/Users-reducer";
import {ReduxStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    users: UsersType
}

type MapDispatchToPropsType = {
    follow: (userID:number) => void,
    unfollow: (userID:number) => void,
    setUsers: (users:UsersType) => void
}
let mapStateToProps = (state:ReduxStateType):MapStateToPropsType => {
    return {
        users:state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
return {
    follow: (userID:number) => {
        dispatch(followAC(userID));
    },
    unfollow: (userID:number) => {
        dispatch(unfollowAC(userID))
    },
    setUsers: (users:UsersType) => {
        dispatch(setUsersAC(users))
    },

}
}
export default connect<MapStateToPropsType,MapDispatchToPropsType,{},ReduxStateType>(mapStateToProps, mapDispatchToProps)(Users);