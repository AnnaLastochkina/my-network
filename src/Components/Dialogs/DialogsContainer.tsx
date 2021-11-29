import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from './dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {storeType} from "../../Redux/store";
import {
    sendMessageCreator,
    updateNewMessageBodyCreator
} from "../../Redux/Dialogs-reducer";
import {reduxStoreType} from "../../Redux/redux-store";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


type DialogType = {
    //store: reduxStoreType
}

const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {store => {

            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            }

            let onNewMessageChange = (body: string) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            }
            return <Dialogs updateNewMessageBody={onNewMessageChange}
                            sendMessage={onSendMessageClick}
                            dialogsPage={store.getState().dialogsPage}/>
        }
        }
    </StoreContext.Consumer>
}


export default DialogsContainer;