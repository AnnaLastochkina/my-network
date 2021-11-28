import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from './dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {storeType} from "../../Redux/store";
import {sendMessageCreator,
    updateNewMessageBodyCreator} from "../../Redux/Dialogs-reducer";
import {reduxStoreType} from "../../Redux/redux-store";
import Dialogs from "./Dialogs";


type DialogType = {
    store: reduxStoreType
}

const DialogsContainer = (props: DialogType) => {
    let state = props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body:string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return <Dialogs updateNewMessageBody = {onNewMessageChange} sendMessage = {onSendMessageClick} dialogsPage={state}/>

}

export default DialogsContainer;