import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css'
import {Name} from "./DialogsItem/Name";
import {Messages} from "./Message/Messages";
import {DialogsType} from "./DialogsContainer";


function Dialogs(props:DialogsType) {

    let state = props.dialogs

    let name = state.names.map(m => <Name key = {m.id} name={m.name} id={m.id}/>)

    let message = state.messages.map(m => <Messages key = {m.id} value={m.message}/>)

    let newMessage = state.newMessage

    const addMessage = () => props.itog()

    const changeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {props.vvod(e.currentTarget.value)}


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
            <div className={classes.text}>
                <textarea placeholder="Введите что-нибудь" value={newMessage} onChange={changeHandler} />
                <button onClick={addMessage}>Отправить</button>
            </div>
        </>
    );
}

export default Dialogs;