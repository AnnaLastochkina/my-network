import React from 'react';



export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean

}

let initialState:InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth:false
}

const SET_USER_DATA = 'SET_USER_DATA'



export const authReducer = (state = initialState, action: ActionUsersType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                email: action.data.email,
                login: action.data.login,
                id: action.data.id,
                isAuth:true
                }



        default :
            return state;
    }


}


export const setAuthUserData = (id:number|null,email:string|null, login:string|null) => ({type: SET_USER_DATA, data: {id, email, login}} as const)
export type setUserDataACType = ReturnType<typeof setAuthUserData>




type ActionUsersType = setUserDataACType






export default authReducer;