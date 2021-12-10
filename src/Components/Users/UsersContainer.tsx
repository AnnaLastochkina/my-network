import React from "react";
import {connect} from "react-redux";

import {
    followAC,
    SetCurrentPageAC,
    setUsersAC, SetUsersTotalCountAC,
    unfollowAC,
    UsersType
} from "../../Redux/Users-reducer";
import {ReduxStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import Users from "./UsersC";

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    users: UsersType
    pageSize: number
    totalUsersCount: number
    currentPage:number
}

type MapDispatchToPropsType = {
    follow: (userID:number) => void,
    unfollow: (userID:number) => void,
    setUsers: (users:UsersType) => void
    setCurrentPage:(pageNumber:number) => void
    setTotalUsersCount:(totalCount:number) => void
}
let mapStateToProps = (state:ReduxStateType):MapStateToPropsType => {
    return {
        users:state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
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
    setCurrentPage: (pageNumber) => {
        dispatch(SetCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
        dispatch(SetUsersTotalCountAC(totalCount))
    }
}
}
export default connect<MapStateToPropsType,MapDispatchToPropsType,{},ReduxStateType>(mapStateToProps, mapDispatchToProps)(Users);