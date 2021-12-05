import React from "react";
import s from "./users.module.css";

let Users = (props: any) => {
if (props.users.length === 0) {
    props.setUsers([
        {
            id: 1,
            photoUrl: 'https://www.meme-arsenal.com/memes/4d29034ab4779d515bcc93f977cf4f8f.jpg',
            followed: false,
            fullName: 'Dmitry',
            status: 'I am a boss',
            location: {city: "Minsk", country: 'Belarus'}
        },
        {
            id: 1,
            photoUrl: 'https://www.meme-arsenal.com/memes/4d29034ab4779d515bcc93f977cf4f8f.jpg',
            followed: true,
            fullName: 'Victor',
            status: 'I am a helper',
            location: {city: "Moscow", country: 'Russia'}
        },
        {
            id: 1,
            photoUrl: 'https://www.meme-arsenal.com/memes/4d29034ab4779d515bcc93f977cf4f8f.jpg',
            followed: false,
            fullName: 'Andrew',
            status: 'I am a boss too',
            location: {city: "Kiev", country: 'Ukraine'}
        }
    ])}

    return <div>
        {
            props.users.map(u => <div key={u.id}>
        <span>
            <div>
               <img src={u.photoUrl} className={s.usersPhoto}/>
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
                <button>Follow</button>
            </div>
        </span>
                <span>
                    <span>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
            </span>
                    <span>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
            </span>
                        </span>
            </div>)
        }
    </div>
}


export default Users;