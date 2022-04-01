import React, {ChangeEvent, useEffect, useState} from 'react';

export const StatusWithHooks = (props:any) => {

    const [edit, setEdit] = useState(false)
    const [status, setStatus] = useState(props.status)


    useEffect(()=>{
        setStatus(props.status)
    },[props.status])


    const handler = () => setEdit(true)

    const handler2 = () => {
        setEdit(false)
        props.updateStatus(status)
    }

    const handler3 = (e:ChangeEvent<HTMLInputElement>) => setStatus(e.currentTarget.value)

        return <>
            {!edit
                ?<div><span onDoubleClick={handler}>{props.status || '------'}</span></div>
                :<div><input value={status} onChange={handler3} onBlur={handler2}/></div>}
            </>
}