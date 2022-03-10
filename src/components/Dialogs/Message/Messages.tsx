import React from 'react';
import classes from './MessagesItem.module.css'

export type MessagesItemPropsType = {
    value: string
}

export function Messages(props: MessagesItemPropsType) {
    return <div className={classes.message}>{props.value}</div>
}