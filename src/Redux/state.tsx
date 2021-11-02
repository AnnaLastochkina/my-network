import {rerenderEntireState} from "../render";

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
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'Its my first message', likesCount: 32},
        ]
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
}
export const addPost = (postmessage:string) => {

    let newPost = {
        id: 5,
        message: postmessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireState(state)
}

export default state;