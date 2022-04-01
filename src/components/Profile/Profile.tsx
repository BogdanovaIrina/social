import React from "react";
import classes from './Profile.module.css';
import imageSrc from '../../images/fon.png';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import photo from '../../images/avatar.png';
import {StatusWithHooks} from "./StatusWithHooks";

export function Profile(props: any) {

    return (
        <div>

            <div><img className={classes.image1} src={imageSrc} alt='Fon'/></div>
            <div className={classes.ava}>
                <img className={classes.photo} src={props.profile ? props.profile.photos.large : photo}
                     alt='Photo'/>
            </div>
            <div className={classes.ava}>
                <StatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <MyPostsContainer/>
        </div>
    )
}
