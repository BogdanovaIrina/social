import React from "react";
import classes from './Header.module.css';
import imageSrc from '../../images/logo.png';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

export function Header(props:any) {
    return (
        <header className={classes.head}>
            <img src={imageSrc} alt='Logotip'/>
            <div className={s.login}>
                {props.isAuth? props.login
                :<NavLink to='/login'>Profile</NavLink>
                }
            </div>
    </header>)
}
