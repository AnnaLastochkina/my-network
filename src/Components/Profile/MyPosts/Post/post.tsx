import React from 'react';
import s from './post.module.css'

type typeOfPost = {
    message: string
    likesCount: number
}
const Post = (props:typeOfPost) => {
    return (

            <div className = {s.item}>
                {props.message}
                <img src='https://klike.net/uploads/posts/2020-04/1587719791_1.jpg' alt ='avatar'/>
                <div>Likes: {props.likesCount}</div>
            </div>


    )
}

export default Post;