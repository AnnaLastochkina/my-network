import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

type PropsType = {
    login:string|null
    isAuth:boolean
}

const Header = (props:PropsType) => {
    return  <header className={s.header}>
        <img src='https://cdn.logo.com/hotlink-ok/logo-social.png' alt='logo'/>
        <div className = {s.loginBlock}>
            {props.isAuth ? props.login
            : <NavLink to = {'/login'}>LOGIN</NavLink>}
        </div>
    </header>
}

export default Header;