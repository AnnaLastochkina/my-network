import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store, {ReduxStateType} from "./Redux/redux-store";
import App from "./App"
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import StoreContext, {Provider} from "./StoreContext";


let rerenderEntireTree = (state: ReduxStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(() => rerenderEntireTree(store.getState()))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
