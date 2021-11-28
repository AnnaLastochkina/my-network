import React from 'react';
import s from './profile.module.css';
import ProfileInfo from "./ProfileInfo";

import MyPostsContainer from "./MyPosts/mypostsContainer";
import {reduxStoreType} from "../../Redux/redux-store";

type ProfilePropsType = {
    store:reduxStoreType
}

const Profile = (props:ProfilePropsType) => {

    return <div className={s.content}>
        <ProfileInfo/>
        <MyPostsContainer  store = {props.store}/>
           </div>

}

export default Profile;
