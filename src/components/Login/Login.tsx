import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormControl/FormControl";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {loginUser} from "../../redux/auth-reducer";
import {reducersType} from "../../redux/store";

type FormDataType = {
    login:string
    password: string
    rememberMe:boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'Login'} placeholder={'Login'} component={Input} validate={required}/>
            </div>
            <div>
                <Field name={'Password'} placeholder={'Password'} component={Input} validate={required}/>
            </div>
            <div>
                <Field name={'rememberMe'} type={'checkbox'} component={Input} validate={required}/>remember me
            </div>
            {props.error && <div>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = (props:any) => {
    const onSubmit = (formData:FormDataType) => {
        props.loginUser(formData.login, formData.password, formData.rememberMe)
    }
    if (props.isAuth) return <Redirect to={'/profile'}/>

    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}

type MapStateToPropsType = {
    isAuth:boolean
}
const mapStateToProps = (state:reducersType) : MapStateToPropsType => ({
    isAuth:state.auth.isAuth
})

export default connect(mapStateToProps, {loginUser})(Login)