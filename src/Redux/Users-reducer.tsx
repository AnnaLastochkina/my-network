import React from 'react';

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
}

let initialState:InitialStateType = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'


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

        default :
            return state;
    }


}


export const followAC = (userID:number) => ({type: FOLLOW, userID} as const)
export type FollowACType = ReturnType<typeof followAC>
export const unfollowAC = (userID:number) => ({type: UNFOLLOW, userID} as const )
export type unFollowACType = ReturnType<typeof unfollowAC>
export const setUsersAC = (users:UsersType) => ({type: SET_USERS, users} as const )
export type SetUsersACType = ReturnType<typeof setUsersAC>
export const SetCurrentPageAC = (currentPage:number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export type SetCurrentPageACType = ReturnType<typeof SetCurrentPageAC>
export const SetUsersTotalCountAC = (totalUsersCount:number) => ({type:SET_TOTAL_USERS_COUNT, count:totalUsersCount} as const)
export type SetUsersTotalCountACType = ReturnType<typeof SetUsersTotalCountAC>



type ActionUsersType = FollowACType | unFollowACType | SetUsersACType | SetCurrentPageACType | SetUsersTotalCountACType






export default usersReducer;