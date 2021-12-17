import profileReducer, {addPostActionCreator, setUserProfile, updateNewPostTextActionCreator} from "./Profile-reducer";
import {dialogsReducer, sendMessageCreator, updateNewMessageBodyCreator} from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";

export type DialogsType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type PostsDataType = {
    id: number
    message: string
    likesCount: number

}
export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogsType>
    newMessageBody: string
}
export type ProfilePageType = {
    posts: Array<PostsDataType>
    newPostText: string
    profile: any
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar:{}
}
export type storeType = {
    _state:StateType
    _callSubscriber: any
    subscribe:any
    getState: () => StateType
    dispatch:(action:ActionsTypes)=>void

}

export type ActionsTypes = ReturnType<typeof addPostActionCreator>| ReturnType<typeof updateNewPostTextActionCreator>|
    ReturnType<typeof updateNewMessageBodyCreator>|ReturnType<typeof sendMessageCreator>|ReturnType<typeof setUserProfile>


let store:storeType = {
    _state : {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'Its my first message', likesCount: 32},
            ],
            newPostText: 'It-kamasutra',
            profile: null,
        },
        dialogsPage: {
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
        },
        sidebar:{}
    },
    _callSubscriber() {
        console.log('hey hey');
    },
    getState(){
        return this._state;
    },
    subscribe(observer: (state: storeType) => void) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state);
    }
}




export default store;
/*window.store = store*/







