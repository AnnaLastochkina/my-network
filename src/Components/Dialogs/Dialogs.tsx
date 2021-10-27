import React from 'react';
import s from './dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsType, MessageType} from "../../index";

export type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}

const Dialogs = (props:DialogsPropsType) => {

    let dialogElements = props.dialogs.map ( (dialog) => <DialogItem name={dialog.name} id={dialog.id}/> )

    let messagesElements = props.messages.map ((message) => <Message message={message.message}/>)

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