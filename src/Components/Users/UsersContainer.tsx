import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../Redux/Users-reducer";
import {ReduxStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";

let mapStateToProps = (state:ReduxStateType) => {
    return {
        users:state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
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
export default connect(mapStateToProps, mapDispatchToProps)(Users);