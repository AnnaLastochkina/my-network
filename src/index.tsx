import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type DialogsType = {
    id: number
    name: string
}

let dialogs: Array<DialogsType> = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Victor'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Valera'},
]

export type MessageType = {
    id: number
    message: string
}
let messages: Array<MessageType> = [
    {id: 1, message: 'hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'yo'},
    {id: 4, message: 'yo'},
    {id: 5, message: 'yo'},
]
export type PostsDataType = {
    id: number
    message: string
    likesCount: number
}
let posts: Array<PostsDataType> = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'Its my first message', likesCount: 32},
]

ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
