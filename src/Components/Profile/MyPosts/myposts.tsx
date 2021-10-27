import React from 'react';
import s from './myposts.module.css'
import Post from "./Post/post";


const MyPosts = () => {
    let postsData = [
        {id: 1, message: 'Hi, how are you?', likesCount : 12},
        {id: 2, message: 'Its my first message', likesCount : 32},
    ]
    let postsElements = postsData.map (p => <Post message= {p.message} likesCount= {p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea>Create your new post</textarea>
            </div>
            <div>
            <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
        </div>
        </div>
    )
}

export default MyPosts;