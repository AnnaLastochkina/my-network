import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionsTypes, storeType} from "./Redux/state";


export type appPropsType = {
    store: storeType
    dispatch:(action:ActionsTypes)=>void
}

const App = (props:appPropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className = 'app-wrapper-content'>
                    <Route path = '/dialogs'
                           render= { () => <Dialogs
                           store = {props.store}/>
                    }/>
                    <Route path = '/profile'
                           render={ () => <Profile profilePage = {props.store.getState().profilePage}
                           dispatch = {props.dispatch} /> } />
                </div>
            </div>

        </BrowserRouter>
                        )
}

export default App;

