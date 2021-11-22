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
    ReturnType<typeof updateNewMessageBodyCreator>|ReturnType<typeof sendMessageCreator>


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE'

let store:storeType = {
    _state : {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'Its my first message', likesCount: 32},
            ],
            newPostText: 'It-kamasutra'
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
    dispatch(action){
        if(action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message:  this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else  if (action.type === UPDATE_NEW_POST_TEXT){
                        this._state.profilePage.newPostText = action.newText;
                        this._callSubscriber(this._state);
                    }

        else  if  (action.type === UPDATE_NEW_MESSAGE_BODY){
                this._state.dialogsPage.newMessageBody = action.body;
                this._callSubscriber(this._state);
        }
        else  if  (action.type === SEND_MESSAGE){
                let body = this._state.dialogsPage.newMessageBody;
                this._state.dialogsPage.newMessageBody = '';
                this._state.dialogsPage.messages.push({id: 6, message: body});
                this._callSubscriber(this._state);
        }



   }
}

export const addPostActionCreator = (postText:string) => ({

        type:ADD_POST,
    postText: postText
}) as const


export const updateNewPostTextActionCreator = (newText:string) => ({
        type:UPDATE_NEW_POST_TEXT,
        newText: newText
}) as const

export const sendMessageCreator = () => ({type: SEND_MESSAGE})as const
export const updateNewMessageBodyCreator = (body:string) => ({type:UPDATE_NEW_MESSAGE_BODY, body: body})as const
export default store;
/*window.store = store*/







