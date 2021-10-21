import React from 'react';
import s from './profile.module.css'
import myPosts from './MyPosts/myposts'
import MyPosts from "./MyPosts/myposts";

const Profile = () => {
    return   <div className={s.content}>
        <div>
            <img alt="main" src="https://i.pinimg.com/originals/f9/04/2b/f9042bbf2e213b40c29addeb3deba586.jpg"/>
        </div>
        <div>
            Ava+description
        </div>
        <MyPosts />
        </div>

}

export default Profile;