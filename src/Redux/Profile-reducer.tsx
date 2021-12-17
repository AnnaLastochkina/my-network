import {ActionsTypes, ProfilePageType} from "./store";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = "SET_USER_PROFILE"


let initialState:ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Its my first message', likesCount: 32},
    ],
    newPostText: 'It-kamasutra',
    profile: null
};

export type ProfileResponsePropsType = {
    userId?: number
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?:string
    contacts?:object
    github?: string
    vk?: string
    facebook?: string
    instagram?: string
    twitter?: string
    website?: string
    youtube?: string
    mainLink?: string
    photos?: photosType

}
type photosType ={
    small:string
    large:string
}


const profileReducer = (state = initialState,action:ActionsTypes) => {
switch(action.type) {
    case ADD_POST : {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
        };
        return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ''
        };
    }
        case    UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
    case SET_USER_PROFILE: {
        return {...state, profile:action.profile}
    }
    default:
        return state;
}}

export const addPostActionCreator = () => ({
    type:ADD_POST,
}) as const


export const updateNewPostTextActionCreator = (newText:string) => ({
    type:UPDATE_NEW_POST_TEXT,
    newText: newText
}) as const
export const setUserProfile = (profile:ProfileResponsePropsType) => ({type:SET_USER_PROFILE, profile}) as const
export default profileReducer