import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img alt="main" src="https://i.pinimg.com/originals/f9/04/2b/f9042bbf2e213b40c29addeb3deba586.jpg"/>
            </div>
            <div className ={s.descriptionBlock}>
                Ava+description
            </div>
        </div>

    )

}

export default ProfileInfo;