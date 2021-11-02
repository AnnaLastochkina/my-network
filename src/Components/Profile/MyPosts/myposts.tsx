import React from 'react';
import s from './myposts.module.css'
import Post from "./Post/post";
import {PostsDataType} from "../../../Redux/state";

type myPostsType = {
    posts: Array<PostsDataType>
    addPost: (postmessage:string) => void
}


const MyPosts = (props: myPostsType) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let postsElements = props.posts.map (p => <Post id={p.id} message= {p.message} likesCount= {p.likesCount}/>)
    let addPost = () => {
        debugger;
        if( newPostElement.current ) {
            let text = newPostElement.current.value;
            props.addPost(text)

        }
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}>Create your new post</textarea>
            </div>
            <div>
            <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
        </div>
        </div>
    )
}

export default MyPosts;