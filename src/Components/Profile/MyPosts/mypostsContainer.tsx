import React from 'react';

import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../Redux/Profile-reducer'
import MyPosts from "./myposts";
import {connect} from "react-redux";
import {ReduxStateType} from "../../../Redux/redux-store";
import {PostsDataType} from "../../../Redux/store";
import {Dispatch} from "redux";

type mapStateToPropsReturnType = {
    posts: Array<PostsDataType>
    newPostText: string
}

const mapStateToProps = (state:ReduxStateType):mapStateToPropsReturnType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch)=> {
    return{
        updateNewPostText: (text:string) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;