import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ActionsTypes} from "./Redux/store";
import {ReduxStateType, reduxStoreType} from "./Redux/redux-store";


export type appPropsType = {
    store: reduxStoreType
    dispatch:(action:ActionsTypes)=>void
    state: ReduxStateType
}

const App = (props:appPropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className = 'app-wrapper-content'>
                    <Switch>
                        <Route  exact path={'/'}  render={ () => <Profile profilePage = {props.store.getState().profilePage}
                                                                          dispatch = {props.dispatch} /> } />
                    <Route  path = '/dialogs'
                           render= { () => <Dialogs
                           store = {props.store}/>
                    }/>
                    <Route path = '/profile'
                           render={ () => <Profile profilePage = {props.store.getState().profilePage}
                           dispatch = {props.dispatch} /> } />
                    </Switch>
                </div>
            </div>

        </BrowserRouter>
                        )
}

export default App;

