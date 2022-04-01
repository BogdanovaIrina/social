import React from 'react';
import classes from "../Profile/MyPosts/Post/Post.module.css";
import src from "../../images/avatar.png";
import s from './Users.module.css'
import {InitialStateUserType} from "../../redux/user-reducer";
import {NavLink} from "react-router-dom";

type PropsType = {
    userscount:number
    pagesize:number
    currentpage:number
    onPageChanged:(m:number) => void
    users: InitialStateUserType
    following: (isFollowing:boolean) => void
    unfollowThunk: (id:number) => void
    followThunk: (id:number) => void
}

export const Users = (props:PropsType) => {

    //let pages = Math.ceil(props.userscount / props.pagesize)

    let pagenumber = []

    for (let i = 1; i<=48; i++) {pagenumber.push(i)}


    return (

        <div className={s.main}>

            {pagenumber.map(m => <span className={props.currentpage === m? s.selected:''} onClick={() => props.onPageChanged(m)}>{m} </span>)}

            {props.users.users.map(m => <div className={s.part} key={m.id}>
                <div className={s.flexCon}>
                    <div>
                        <NavLink to={'/profile/' + m.id}><img className={classes.imageAv} src={m.photos.small != null ? m.photos.small:src} alt='Avatar'/>
                            <span className={s.name}> {m.name} </span></NavLink>

                        <div>
                            {m.followed

                                ? <button className={s.but} onClick={() => props.unfollowThunk(m.id)}>unfollow</button>

                                : <button className={s.but} onClick={() => props.followThunk(m.id)}>follow</button>
                            }
                        </div>
                    </div>
                    <div className={s.text}>
                        <div className={s.status}><span>{m.status} </span></div>
                        <span>{'m.location'}</span>
                    </div>
                </div>
            </div>)}

        </div>
    )
}