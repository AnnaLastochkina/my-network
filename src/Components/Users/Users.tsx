import s from "./users.module.css";
import userImg from "../../assets/images/userImg.png";
import React from "react";
import {UsersType} from "../../Redux/Users-reducer";

type UsersPresentationPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number)=>void
    users: UsersType
    follow: (userID: number) => void
    unfollow: (userID: number) => void
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
               <img src={u.photos.small !== null ? u.photos.small : userImg} className={s.usersPhoto}/>
            </div>
            <div>
                {u.followed
                    ? <button onClick={() => {
                        props.unfollow(u.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        props.follow(u.id)
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