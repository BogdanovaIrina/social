import React from 'react';
import classes from './Post.module.css';
import src from '../../../../images/avatar.png';
import {PostType} from "../../../../redux/ProfileReducer";

function Post(props:PostType) {
    return (
        <div>
            <img className={classes.imageAv} src={src} alt='Avatar' />   {props.post}   {props.likesCount}
        </div>
    );
}

export default Post;