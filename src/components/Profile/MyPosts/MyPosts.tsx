import React, {ChangeEvent} from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";
import {MyPostsType} from "./MyPostsContainer";


export function MyPosts(props: MyPostsType) {

    let state = props.posts

    let postsElements = state.posts.map(m => <Post key = {m.id} post={m.post} likesCount = {m.likesCount}/>)

    let newMessage = state.newPost

    const addPost = () => props.itog()


    const changeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {props.vvod(e.currentTarget.value)}

    return (
        <div>
            <div className={classes.myPosts}>
                <h3>My posts</h3>
                <div><textarea  value={newMessage} onChange={changeHandler} />
                    <button className={classes.myButton} onClick={addPost}>Add post</button></div>
                <div>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}
