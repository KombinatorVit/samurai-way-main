import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props: any) => {
    return <header className={s.header}>
        <img
            src="https://st2.depositphotos.com/1768926/9284/v/600/depositphotos_92841206-stock-illustration-eye-care-logo-template.jpg"
            alt={'logo'}/>


        <div className={s.loginBlock}>
            { props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>;
};

export default Header;