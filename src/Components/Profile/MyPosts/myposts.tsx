import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from './myposts.module.css'
import Post from "./Post/post";
import {PostsDataType, updateNewPostText} from "../../../Redux/state";

type myPostsType = {
    posts: Array<PostsDataType>
    addPost: () => void
    newPostText: string
    updateNewPostText:(newText:string) => void
}



const MyPosts = (props: myPostsType) => {

    let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let postsElements = props.posts.map (p => <Post id={p.id} message= {p.message} likesCount= {p.likesCount}/>)
    let addPost = () => {
        if( newPostElement.current ) {
            props.addPost()
        }
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}/>
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