import React, {ChangeEvent} from 'react';
import s from './myposts.module.css'
import Post from "./Post/post";
import {AddPostActionType, ChangeNewTextActionType, PostsDataType} from "../../../Redux/state";

type myPostsType = {
    posts: Array<PostsDataType>
    newPostText: string
    dispatch:(action:AddPostActionType | ChangeNewTextActionType)=>void
}



const MyPosts = (props: myPostsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let postsElements = props.posts.map (p => <Post id={p.id} message= {p.message} likesCount= {p.likesCount}/>)
    let addPost = () => {
        if( newPostElement.current ) {
            props.dispatch({type:'ADD-POST', newPostText:newPostElement.current.value})
        }
    }
    let onPostChange = () => {
        debugger
        let text = newPostElement.current!.value
        props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText: text})
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