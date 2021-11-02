import React from 'react';
import s from './profile.module.css';
import MyPosts from "./MyPosts/myposts";
import ProfileInfo from "./ProfileInfo";
import {addPost, ProfilePageType} from "../../Redux/state";

type ProfilePropsType = {state: ProfilePageType
addPost: (postmessage:string) => void
}

const Profile = (props:ProfilePropsType) => {

    return <div className={s.content}>
        <ProfileInfo/>
        <MyPosts posts={props.state.posts} addPost={props.addPost}/>
           </div>

}

export default Profile;
