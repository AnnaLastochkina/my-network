import React from 'react';
import s from './profile.module.css';
import MyPosts from "./MyPosts/myposts";
import ProfileInfo from "./ProfileInfo";
import {ProfilePageType} from "../../Redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText:string) => void
}

const Profile = (props:ProfilePropsType) => {

    return <div className={s.content}>
        <ProfileInfo/>
        <MyPosts posts={props.profilePage.posts}
                 addPost={props.addPost}
                 newPostText = {props.profilePage.newPostText}
                 updateNewPostText = {props.updateNewPostText}/>
           </div>

}

export default Profile;
