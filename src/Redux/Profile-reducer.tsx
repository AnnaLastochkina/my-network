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
    case ADD_POST :
        let newPost = {
            id: 5,
            message:  state.newPostText,
            likesCount: 0
        };
        state.posts.push(newPost);
        state.newPostText = '';
        return state;
    case    UPDATE_NEW_POST_TEXT:
        state.newPostText = action.newText;
        return state;

    default:
        return state;
}}

export const addPostActionCreator = (postText:string) => ({

    type:ADD_POST,
    postText: postText
}) as const


export const updateNewPostTextActionCreator = (newText:string) => ({
    type:UPDATE_NEW_POST_TEXT,
    newText: newText
}) as const

export default profileReducer