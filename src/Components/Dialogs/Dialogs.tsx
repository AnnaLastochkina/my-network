import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './dialogs.module.css'

type dialogItemType = {
    name:string
    id:number
}
type messageType ={
    message:string
}
const DialogItem = (props: dialogItemType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to = {path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props:messageType) => {
    return <div className={s.message}>{props.message}</div>
}
const Dialogs = () => {
    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Dimych' id={1}  />
                <DialogItem name='Andrey' id={2}  />
                <DialogItem name='Victor' id={3}  />
                <DialogItem name='Sasha' id={4}  />
                <DialogItem name='Valers' id={5}  />

            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How are you'/>
                <Message message='yo'/>

            </div>
        </div>
    )
}

export default Dialogs;