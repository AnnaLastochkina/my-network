import React from 'react';

import {addPostActionCreator,updateNewPostTextActionCreator } from '../../../Redux/Profile-reducer'
import MyPosts from "./myposts";
import {reduxStoreType} from "../../../Redux/redux-store";
type myPostsContainerType = {
    store: reduxStoreType;
}


const MyPostsContainer = (props: myPostsContainerType) => {
let state = props.store.getState();
    let addPost = () => {
            props.store.dispatch(addPostActionCreator(state.profilePage.newPostText))
    }
    let onPostChange = (text:string) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }
    return (
        <MyPosts  updateNewPostText={onPostChange}
                  addPost = {addPost}
                  posts={state.profilePage.posts}
                  newPostText={state.profilePage.newPostText}
                  />
    )
}

export default MyPostsContainer;