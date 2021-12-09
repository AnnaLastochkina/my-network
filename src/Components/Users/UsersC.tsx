import React from "react";
import s from "./users.module.css";
import {UsersType} from "../../Redux/Users-reducer";
import axios from 'axios';
import userImg from '../../assets/images/userImg.png';
import {UsersPropsType} from "./UsersContainer";


export type UsersResponseType = {
        items: UsersType,
        totalCount: number,
        error: string
}



class Users extends React.Component<UsersPropsType>  {


    constructor(props:UsersPropsType) {
        super(props);

            axios.get<UsersResponseType>("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            })
        }

        render () {
        return <div>

            {
                this.props.users.map((u) => <div key={u.id}>
        <span>
            <div>
               <img src={ u.photos.small !== null ? u.photos.small : userImg} className={s.usersPhoto}/>
            </div>
            <div>
                {u.followed
                    ? <button onClick={() => {
                        this.props.unfollow(u.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        this.props.follow(u.id)
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
}


export default Users;