import React from 'react';
import classes from './DialogsItem.module.css'
import {NavLink} from "react-router-dom";
import {NameType} from "../../../redux/DialogReducer";


export function Name(props: NameType) {
    return (
            <div className={classes.dialog + ' ' + classes.active}>
                <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
            </div>
    )
}
