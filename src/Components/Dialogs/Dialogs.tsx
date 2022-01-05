import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from './dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../Redux/store";
import {Redirect} from "react-router-dom";



type DialogType = {
    updateNewMessageBody :(body:string) => void
    sendMessage : () => void
    dialogsPage: DialogsPageType
    isAuth:boolean
}

const Dialogs = (props: DialogType) => {

let state = props.dialogsPage
   let dialogElements = state.dialogs.map((dialog) =>
        <DialogItem name={dialog.name}
                    id={dialog.id}/>)

    let messagesElements = state.messages.map((message) =>
        <Message message={message.message}/>)
    let newMessageBody = state.newMessageBody


    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
       let body = e.currentTarget.value
       props.updateNewMessageBody(body)
    }

    if (!props.isAuth) return <Redirect to={'/Login'}/>;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div> {messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   placeholder='Enter your message'
                                   onChange={onNewMessageChange}
                    /></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dialogs;