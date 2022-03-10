import React from "react";
import classes from './Profile.module.css';
import imageSrc from '../../images/fon.png';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import Status from "./Status";

type PropsType = {
    status:string
    updateStatus: (status:string) => void
}


export function Profile(props: any) {

    return (
        <div>

            <div><img  className={classes.image1} src={imageSrc} alt='Fon' /></div>
            <div className={classes.ava}><img src={props.profile? props.profile.photos.large: 'ne zagruzil'} alt=''/></div>
            <Status status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}
