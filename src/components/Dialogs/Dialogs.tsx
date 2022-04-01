import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'
import {Name} from "./DialogsItem/Name";
import {Messages} from "./Message/Messages";
import {DialogsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {lengthC, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormControl/FormControl";


function Dialogs(props:DialogsType) {

    let state = props.dialogs

    let name = state.names.map(m => <Name key = {m.id} name={m.name} id={m.id}/>)

    let message = state.messages.map(m => <Messages key = {m.id} value={m.message}/>)

    const addNewMessage = (value:any) => {
        props.itog(value.message)
    }

    return (
        <>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {name}
                </div>
                <div className={classes.messages}>
                    {message}
                </div>
            </div>
            <FormRedux onSubmit={addNewMessage}/>
        </>
    );
}

export default Dialogs;


type FormDataType = {
    message:string
    onSubmit:(value:any) => void
}
let maxlength100 = lengthC(100)

const Form: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'message'} placeholder={'Message'} validate={[required, maxlength100]}/>
            <button>Отправить</button>
        </form>
    )
}

const FormRedux = reduxForm<FormDataType>({form: 'forma'})(Form)
