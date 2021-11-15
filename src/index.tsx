import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {StateType, subscribe} from "./Redux/state";
import {addPost, updateNewPostText} from "./Redux/state";
import App from "./App"
import {ReactDOM} from "react";




let rerenderEntireState = (state:StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost = {addPost} updateNewPostText = {updateNewPostText}/>
        </React.StrictMode>, document.getElementById('root')
    );}

rerenderEntireState(state)
subscribe(rerenderEntireState)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
