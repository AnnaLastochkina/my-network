import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css'

const Navbar = () => {
    return  (
    <nav className={s.nav}>
        <div className ={s.item}>
            <NavLink to='/Profile' activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className ={s.item}>
            <NavLink to='/Dialogs' activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className ={s.item}>
            <NavLink to='/Users' activeClassName={s.activeLink}>Users</NavLink>
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