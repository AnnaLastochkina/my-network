import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store, {ReduxStateType} from "./Redux/redux-store";
import App from "./App"
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";





let rerenderEntireTree = (state: ReduxStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                 dispatch={store.dispatch.bind(store)}
                 store={store}
                 state={state}
            />

        </BrowserRouter>, document.getElementById('root')
    );}

rerenderEntireTree(store.getState())

store.subscribe(()=>rerenderEntireTree(store.getState()))



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
