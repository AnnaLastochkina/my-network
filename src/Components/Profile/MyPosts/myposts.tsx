import React from 'react';
import s from './myposts.module.css'
import Post from "./Post/post";
import {ActionsTypes, PostsDataType,} from "../../../Redux/store";


type myPostsType = {
    posts: Array<PostsDataType>
    newPostText: string
    updateNewPostText:(text:string)=> void
    addPost:()=>void
}


const MyPosts = (props: myPostsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let postsElements = props.posts.map (p => <Post id={p.id} message= {p.message} likesCount= {p.likesCount}/>)
    let onAddPost = () => {
        props.addPost()
            //props.dispatch(addPostActionCreator(props.newPostText))
    }
    let onPostChange = () => {
        let text = newPostElement.current!.value
        props.updateNewPostText(text)
        //props.dispatch(updateNewPostTextActionCreator(text))
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}/>
            </div>
            <div>
            <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
        </div>
        </div>
    )
}

export default MyPosts;