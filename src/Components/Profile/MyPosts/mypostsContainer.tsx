import React from 'react';

import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../Redux/Profile-reducer'
import MyPosts from "./myposts";
import {reduxStoreType} from "../../../Redux/redux-store";
import StoreContext from "../../../StoreContext";

type myPostsContainerType = {
    //store: reduxStoreType;
}


const MyPostsContainer = (props: myPostsContainerType) => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();
            let addPost = () => {
            store.dispatch(addPostActionCreator(state.profilePage.newPostText))
        }
            let onPostChange = (text: string) => {
            let action = updateNewPostTextActionCreator(text)
            store.dispatch(action)
        }
                return <MyPosts updateNewPostText={onPostChange}
                         addPost={addPost}
                         posts={state.profilePage.posts}
                         newPostText={state.profilePage.newPostText}
                />
            }}
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;