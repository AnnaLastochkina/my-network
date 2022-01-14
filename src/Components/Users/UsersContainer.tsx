import React from "react";
import {connect} from "react-redux";
import {
    follow,unFollow, getUsers,
    SetCurrentPage,
    UsersType
} from "../../Redux/Users-reducer";
import {ReduxStateType} from "../../Redux/redux-store";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";
import {WithAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";


export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

export type UsersResponseType = {
    items: UsersType,
    totalCount: number,
    error: string
    resultCode: number
}


export class UsersContainer extends React.Component<UsersPropsType> {


    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
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
                   unfollow={this.props.unFollow}
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
    followinginProgress: number[]
}

type MapDispatchToPropsType = {
    follow: (userID: number) => void,
    unFollow: (userID: number) => void,
    SetCurrentPage: (pageNumber: number) => void
    getUsers: any
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




export default compose<React.ComponentType> (
    WithAuthRedirect,
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, ReduxStateType>(mapStateToProps, {
        follow,
        unFollow,
        SetCurrentPage,
        getUsers,
    })
)(UsersContainer)