import React from 'react';
import {Dispatch} from "redux";
import {usersAPI} from "../API/API";

export type UserType = {
    id: number
    followed: boolean
    name: string
    status: string
    location: {city:string, country: string}
    photos: {small:string | null, large:string | null}
}

export type UsersType = Array<UserType>

export type InitialStateType = {
    users:UsersType
    pageSize: number
    totalUsersCount: number
    currentPage:number
    isFetching:boolean
    followinginProgress:number[]
}

let initialState:InitialStateType = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followinginProgress: []
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


export const usersReducer = (state = initialState, action: ActionUsersType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userID) {
                        return {...u, followed:true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
                return {...state, isFetching: action.isFetching}
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followinginProgress: action.isFetching
                    ? [...state.followinginProgress, action.userID]
                    : state.followinginProgress.filter(id => id !== action.userID)}
        }
        default :
            return state;
    }


}


export const followSuccess = (userID:number) => ({type: FOLLOW, userID} as const)
export type FollowACType = ReturnType<typeof followSuccess>
export const unfollowSuccess = (userID:number) => ({type: UNFOLLOW, userID} as const )
export type unFollowACType = ReturnType<typeof unfollowSuccess>
export const setUsers = (users:UsersType) => ({type: SET_USERS, users} as const )
export type SetUsersACType = ReturnType<typeof setUsers>
export const SetCurrentPage = (currentPage:number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export type SetCurrentPageACType = ReturnType<typeof SetCurrentPage>
export const SetUsersTotalCount = (totalUsersCount:number) => ({type:SET_TOTAL_USERS_COUNT, count:totalUsersCount} as const)
export type SetUsersTotalCountACType = ReturnType<typeof SetUsersTotalCount>
export const toggleIsFetching = (isFetching:boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export const toggleFollowingProgress = (isFetching:boolean, userID: number) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userID} as const)
export type toggleFollowingProgressACType = ReturnType<typeof toggleFollowingProgress>



export const getUsers = (currentPage:number, pageSize:number) => {
    return (dispatch:Dispatch) => {
    dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {

        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(SetUsersTotalCount(data.totalCount))
    })
}}
export const follow = (userId:number) => {
    return (dispatch:Dispatch) => {
        dispatch(toggleFollowingProgress(true,userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }}

export const unFollow = (userId:number) => {
    return (dispatch:Dispatch) => {
        dispatch(toggleFollowingProgress(true,userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }}

type ActionUsersType = FollowACType | unFollowACType | SetUsersACType | SetCurrentPageACType | SetUsersTotalCountACType |
    toggleIsFetchingACType| toggleFollowingProgressACType






export default usersReducer;