import React from 'react';
import s from './profile.module.css';
import MyPosts from "./MyPosts/myposts";
import ProfileInfo from "./ProfileInfo";
import {ActionsTypes,  ProfilePageType} from "../../Redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch:(action:ActionsTypes)=>void
}

const Profile = (props:ProfilePropsType) => {

    return <div className={s.content}>
        <ProfileInfo/>
        <MyPosts newPostText={props.profilePage.newPostText} posts={props.profilePage.posts}
                 dispatch = {props.dispatch}
                 />
           </div>

}

export default Profile;
