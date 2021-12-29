import React from "react";
import {connect} from "react-redux";
import {
    follow,
    SetCurrentPage,
    setUsers, SetUsersTotalCount, toggleFollowingProgress, toggleIsFetching,
    unfollow,
    UsersType
} from "../../Redux/Users-reducer";
import {ReduxStateType} from "../../Redux/redux-store";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";
import {usersAPI} from "../../API/API";


export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

export type UsersResponseType = {
    items: UsersType,
    totalCount: number,
    error: string
    resultCode:number
}


export class UsersContainer extends React.Component<UsersPropsType> {


    componentDidMount() {
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setUsers(data.items)
                this.props.SetUsersTotalCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.SetCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
            usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(true)
                this.props.setUsers(data.items)
                this.props.SetUsersTotalCount(data.totalCount)
                this.props.toggleIsFetching(false)
            })
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followinginProgress={this.props.followinginProgress}
            />
        </>
    }

}

type MapStateToPropsType = {
    users: UsersType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followinginProgress:number[]
}

type MapDispatchToPropsType = {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setUsers: (users: UsersType) => void
    SetCurrentPage: (pageNumber: number) => void
    SetUsersTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFollowed:boolean, userID: number) => void
}
let mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followinginProgress: state.usersPage.followinginProgress
    }
}




export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, ReduxStateType>(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    SetCurrentPage,
    SetUsersTotalCount,
    toggleIsFetching,
    toggleFollowingProgress,
})
(UsersContainer);