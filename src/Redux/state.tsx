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
}
export type ProfilePageType = {
    posts: Array<PostsDataType>
    newPostText: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type storeType = {
    _state:StateType
    _callSubscriber: any
    subscribe:any
    getState: () => StateType
    dispatch:(action:AddPostActionType | ChangeNewTextActionType)=>void
}
 export type AddPostActionType = {
    type:'ADD-POST'
    newPostText:string
}
export type ChangeNewTextActionType = {
    type:'UPDATE-NEW-POST-TEXT'
    newText:string
}

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
            ]
        }
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
        if(action.type=== 'ADD-POST') {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber()
        }
        else if (action.type=== 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber()
        }



   }
}




export default store;
/*window.store = store*/







