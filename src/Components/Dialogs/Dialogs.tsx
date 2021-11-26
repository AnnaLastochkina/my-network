import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from './dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {storeType} from "../../Redux/store";
import {sendMessageCreator,
    updateNewMessageBodyCreator} from "../../Redux/Dialogs-reducer";
import {reduxStoreType} from "../../Redux/redux-store";


type DialogType = {
    store: reduxStoreType
}

const Dialogs = (props: DialogType) => {
    let state = props.store.getState().dialogsPage

    let dialogElements = state.dialogs.map((dialog) =>
        <DialogItem name={dialog.name}
                    id={dialog.id}/>)

    let messagesElements = state.messages.map((message) =>
        <Message message={message.message}/>)
    let newMessageBody = state.newMessageBody


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
       let body = e.currentTarget.value

        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
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