import React from 'react';
import s from './profile.module.css';
import MyPosts from "./MyPosts/myposts";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {
    return <div className={s.content}>
        <ProfileInfo/>
        <MyPosts/>
    </div>

}

export default Profile;