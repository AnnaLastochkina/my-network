import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './dialogs.module.css'

type dialogItemType = {
    name: string
    id: number
}
type messageType = {
    message: string
}
type dialogsType = any


const DialogItem = (props: dialogItemType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: messageType) => {
    return <div className={s.message}>{props.message}</div>
}
const Dialogs = (props:dialogsType) => {

    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Victor'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Valera'},
    ]
    let messages = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'yo'},
        {id: 4, message: 'yo'},
        {id: 5, message: 'yo'},
    ]


    let dialogElements = dialogs.map ( dialog => <DialogItem name={dialog.name} id={dialog.id}/> )

    let messagesElements = messages.map (message => <Message message={message.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;