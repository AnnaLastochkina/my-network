import {ActionsTypes, DialogsPageType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE'


let initialState:DialogsPageType = {
    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'yo'},
        {id: 4, message: 'yo'},
        {id: 5, message: 'yo'},
    ],
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Victor'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Valera'},
    ],
    newMessageBody:''
};

export const dialogsReducer = (state = initialState, action:ActionsTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case     SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default :
            return state;
    }


}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})as const
export const updateNewMessageBodyCreator = (body:string) => ({type:UPDATE_NEW_MESSAGE_BODY, body: body})as const