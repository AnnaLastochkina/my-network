import React from 'react';

export type UserType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: {city:string, country: string}
    photoUrl:string
}

export type UsersType = Array<UserType>

export type InitialStateType = {users:UsersType}

let initialState:InitialStateType = {
    users: [] as Array<UserType>
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


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
            return {...state, users: [...state.users, ...action.users]}
        }

        default :
            return state;
    }


}


export const followAC = (userID:number) => ({type: FOLLOW, userID} as const )
export type FollowACType = ReturnType<typeof followAC>
export const unfollowAC = (userID:number) => ({type: UNFOLLOW, userID} as const )
export type unFollowACType = ReturnType<typeof unfollowAC>
export const setUsersAC = (users:UsersType) => ({type: SET_USERS, users} as const )
export type SetUsersACType = ReturnType<typeof setUsersAC>

type ActionUsersType = FollowACType | unFollowACType | SetUsersACType






export default usersReducer;