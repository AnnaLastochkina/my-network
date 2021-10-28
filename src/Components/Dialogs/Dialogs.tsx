import React from 'react';
import s from './dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType, StateType} from "../../Redux/state";


type DialogType = {
    state: DialogsPageType
}

const Dialogs = (props:DialogType) => {

    let dialogElements = props.state.dialogs.map ( (dialog) =>
        <DialogItem name={dialog.name}
                    id={dialog.id}/> )

    let messagesElements = props.state.messages.map ((message) =>
        <Message message={message.message}/>)

    return(
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