import React from 'react';
import s from './myposts.module.css'
import Post from "./Post/post";
import {PostsDataType} from "../../../Redux/state";

type myPostsType = {posts: Array<PostsDataType>}

const MyPosts = (props: myPostsType) => {

    let postsElements = props.posts.map (p => <Post id={p.id} message= {p.message} likesCount= {p.likesCount}/>)

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