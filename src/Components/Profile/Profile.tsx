import React from 'react';
import s from './profile.module.css';
import MyPosts from "./MyPosts/myposts";
import ProfileInfo from "./ProfileInfo";
import {PostsDataType} from "../../index";

type ProfilePropsType = {posts:Array<PostsDataType>}

const Profile = (props:ProfilePropsType) => {

    return <div className={s.content}>
        <ProfileInfo/>
        <MyPosts posts={props.posts} />
           </div>

}

export default Profile;
