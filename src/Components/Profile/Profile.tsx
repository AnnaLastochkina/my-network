import React from 'react';
import s from './profile.module.css';
import MyPosts from "./MyPosts/myposts";
import ProfileInfo from "./ProfileInfo";
import {ProfilePageType, StateType} from "../../Redux/state";

type ProfilePropsType = {state: ProfilePageType}

const Profile = (props:ProfilePropsType) => {

    return <div className={s.content}>
        <ProfileInfo/>
        <MyPosts posts={props.state.posts} />
           </div>

}

export default Profile;
