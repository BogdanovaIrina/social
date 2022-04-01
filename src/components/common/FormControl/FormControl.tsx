import React from 'react';

export const Textarea = ({input, meta, ...props}:any) => {

    const hasError = meta.touched && meta.error
    return (
        <div>
            <div><textarea {...input} {...props}></textarea></div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}:any) => {

    const hasError = meta.touched && meta.error
    return (
        <div>
            <div><input {...input} {...props}></input></div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}