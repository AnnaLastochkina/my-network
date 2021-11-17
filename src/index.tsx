import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store, {storeType} from "./Redux/state";
import App from "./App"
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";





let rerenderEntireTree = (state: storeType) => {
    console.log('state: ', state)
    ReactDOM.render(
        <BrowserRouter>
            <App state={state.getState()}
                 addPost={state.addPost.bind(state)}
                 updateNewPostText={state.updateNewPostText.bind(state)}
            />
        </BrowserRouter>, document.getElementById('root')
    );}

rerenderEntireTree(store)
store.subscribe(()=>rerenderEntireTree(store))



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
