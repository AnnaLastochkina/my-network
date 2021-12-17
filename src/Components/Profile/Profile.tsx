import React from 'react';
import s from './profile.module.css';
import ProfileInfo from "./ProfileInfo";

import MyPostsContainer from "./MyPosts/mypostsContainer";
import {reduxStoreType} from "../../Redux/redux-store";
import {ProfileResponsePropsType} from "../../Redux/Profile-reducer";

type ProfilePropsType = {
 profile: ProfileResponsePropsType
}

const Profile = (props:ProfilePropsType) => {

    return <div className={s.content}>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer  />
           </div>

}

export default Profile;
