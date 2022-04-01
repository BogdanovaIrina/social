import React, {memo} from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";
import {MyPostsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {lengthC, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControl/FormControl";


export const MyPosts = memo((props:MyPostsType) => {

    // shouldComponentUpdate(nextProps: Readonly<MyPostsType>, nextState: Readonly<{}>): boolean {
    //     return nextProps !== this.props || nextState !== this.state
    // }

    let state = props.posts

    let postsElements = state.posts.map(m => <Post key = {m.id} post={m.post} likesCount = {m.likesCount}/>)


    const addPost = (value:any) => props.itog(value.message)


    return (
        <div>
            <div className={classes.myPosts}>
                <h3>My posts</h3>
                <FormRedux onSubmit={addPost}/>
                <div>
                    {postsElements}
                </div>
            </div>
        </div>
    )
})

type FormDataType = {
    message:string
    onSubmit:(value:any) => void
}
let maxlength10 = lengthC(10)

const Form: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'message'} placeholder={'Message'} validate={[required, maxlength10]}/>
            <button>Отправить</button>
        </form>
    )
}

const FormRedux = reduxForm<FormDataType>({form: 'forma'})(Form)