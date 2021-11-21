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
}
export type ChangeNewTextActionType = {
    type:'UPDATE-NEW-POST-TEXT'
    newText:string
}
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
        if(action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message:  this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber()
        }
        else {

            if (action.type === UPDATE_NEW_POST_TEXT){
                        this._state.profilePage.newPostText = action.newText;
                        this._callSubscriber()
                    }
        }



   }
}

export const addPostActionCreator = (): AddPostActionType => ({

        type: ADD_POST
})



export const updateNewPostTextActionCreator = (text:string): ChangeNewTextActionType => ({
        type:'UPDATE-NEW-POST-TEXT',
        newText: text
})


export default store;
/*window.store = store*/







