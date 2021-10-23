import React from 'react';
import s from './myposts.module.css'
import Post from "./Post/post";


const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
            <button>Add post</button>
            </div>
            <div className={s.posts}>
            <Post message='Hi, how are you?'/>
            <Post message="It's my first message"/>
        </div>
        </div>
    )
}

export default MyPosts;