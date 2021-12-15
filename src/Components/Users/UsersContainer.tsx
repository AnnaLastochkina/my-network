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


import axios from 'axios';

import {Users} from "./Users";


export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

export type UsersResponseType = {
    items: UsersType,
    totalCount: number,
    error: string
}


export class UsersContainer extends React.Component<UsersPropsType> {


    componentDidMount() {
        axios.get<UsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get<UsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    render() {

       return  <Users totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               onPageChanged={this.onPageChanged}
               users={this.props.users}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
        />
    }

}

type MapStateToPropsType = {
    users: UsersType
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type MapDispatchToPropsType = {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setUsers: (users: UsersType) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}
let mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: UsersType) => {
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
export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, ReduxStateType>(mapStateToProps, mapDispatchToProps)(UsersContainer);