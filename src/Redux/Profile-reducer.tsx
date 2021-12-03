import {ActionsTypes, ProfilePageType} from "./store";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState:ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Its my first message', likesCount: 32},
    ],
    newPostText: 'It-kamasutra'
};


const profileReducer = (state = initialState,action:ActionsTypes) => {
switch(action.type) {
    case ADD_POST :{
        let newPost = {
            id: 5,
            message:  state.newPostText,
            likesCount: 0
        };
        let stateCopy = {...state}
        stateCopy.posts = [...state.posts]
        stateCopy.posts.push(newPost);
        stateCopy.newPostText = '';
        return stateCopy;}
    case    UPDATE_NEW_POST_TEXT:{
        let stateCopy = {...state}
        stateCopy.newPostText = action.newText;
        return stateCopy;}

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

export default profileReducer