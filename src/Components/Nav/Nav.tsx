import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css'

const Navbar = () => {
    return  (
    <nav className={s.nav}>
        <div className ={s.item}>
            <NavLink to='/Profile' >Profile</NavLink>
        </div>
        <div className ={s.item}>
            <NavLink to='/Dialogs' >Messages</NavLink>
        </div>
        <div className ={s.item}>
            <NavLink to='/Users' >Users</NavLink>
        </div>
        <div className ={s.item}>
            <a>Music</a>
        </div>
        <div className ={s.item}>
            <a>Settings</a>
        </div>
    </nav>
    )
}

export default Navbar;