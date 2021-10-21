import React from 'react';
import s from './post.module.css'

type typeOfPost = string
const Post = (props:typeOfPost) => {
    return (

            <div className = {s.item}>
                {props.message}
                <img src='https://klike.net/uploads/posts/2020-04/1587719791_1.jpg' alt ='avatar'/>
            </div>


    )
}

export default Post;