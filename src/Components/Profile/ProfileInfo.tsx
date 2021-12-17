import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../common/Preloader";
import {ProfileResponsePropsType} from "../../Redux/Profile-reducer";
import {ProfileContainerPropsType} from "./ProfileContainer";



const ProfileInfo = (props:any) => {
    if(!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img alt="main" src="https://i.pinimg.com/originals/f9/04/2b/f9042bbf2e213b40c29addeb3deba586.jpg"/>
            </div>
            <div className ={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                Ava+description
            </div>
        </div>

    )

}

export default ProfileInfo;