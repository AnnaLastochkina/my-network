import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ActionsTypes} from "./Redux/store";
import {ReduxStateType, reduxStoreType} from "./Redux/redux-store";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";


/*export type appPropsType = {
    store: reduxStoreType
    dispatch:(action:ActionsTypes)=>void
    state: ReduxStateType
}*/

const App = (/*props:appPropsType*/) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className = 'app-wrapper-content'>
                    <Switch>
                        <Route  exact path={'/'}  render={ () => <Profile  /> } />
                    <Route  path = '/dialogs'
                           render= { () => <DialogsContainer />
                    }/>
                    <Route path = '/profile'
                           render={ () => <Profile /> } />
                    </Switch>
                </div>
            </div>

        </BrowserRouter>
                        )
}

export default App;

