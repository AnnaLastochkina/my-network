import React from 'react';
import s from './myposts.module.css'
import Post from "./Post/post";

const MyPosts = () => {
    return (
        <div className={s.posts} >
            My posts
            <Post message='Hi, how are you?'/>
            <Post message="It's my first message"/>
        </div>
    )
}

export default MyPosts;