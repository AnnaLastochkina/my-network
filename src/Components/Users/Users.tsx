import s from "./users.module.css";
import userImg from "../../assets/images/userImg.png";
import React from "react";
import { UsersType} from "../../Redux/Users-reducer";
import { NavLink } from 'react-router-dom';
import axios from "axios";
import {UsersResponseType} from "./UsersContainer";

type UsersPresentationPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number)=>void
    users: UsersType
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    toggleFollowingProgress:(isFollowed: boolean, userID:number) => void
    followinginProgress:number[]
}


export let Users = (props: UsersPresentationPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }




    return <div>
        <div>
            {pages.map((p) => {
                    return <span className={props.currentPage === p ? s.selectedPage : ''}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}
                    >{p}</span>
                }
            )}
        </div>
        {
            props.users.map((u) => <div key={u.id}>
        <span>
            <div>
               <NavLink to={'./profile/' + u.id}>
                   <img src={u.photos.small !== null ? u.photos.small : userImg} className={s.usersPhoto}/>
               </NavLink>
            </div>
            <div>
                {u.followed
                    ? <button disabled={!!props.toggleFollowingProgress} onClick={() => {
                        props.toggleFollowingProgress(true, u.id)
                        axios.delete<UsersResponseType>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                             {
                                withCredentials: true,
                                 headers: {
                                    'API-KEY':"204a06f3-f4cf-44c7-b104-0263b991a423"
                                 }
                            })
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                    props.unfollow(u.id)
                                }
                                props.toggleFollowingProgress(false, u.id)
                    })}}>Unfollow</button>

                    : <button disabled={!!props.toggleFollowingProgress} onClick={() => {
                        props.toggleFollowingProgress(true, u.id)
                        axios.post<UsersResponseType>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                            {}, {
                            withCredentials: true,
                                headers: {
                                    'API-KEY':"204a06f3-f4cf-44c7-b104-0263b991a423"
                                }
                        })
                            .then(response => {
                               if (response.data.resultCode === 0) {
                                   props.follow(u.id)
                               }
                                props.toggleFollowingProgress(false, u.id)
                            })

                    }}>Follow</button>
                }

            </div>
        </span>
                <span>
                    <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
                    <span>
                <div>{u.location?.country}</div>
                <div>{u.location?.city}</div>
            </span>
                        </span>
            </div>)
        }
    </div>
}