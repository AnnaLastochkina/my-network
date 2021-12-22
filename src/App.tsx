import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";




const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path={'/'} render={() => <ProfileContainer />}/>
                        <Route path='/dialogs'
                               render={() => <DialogsContainer/>
                               }/>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer />}/>

                        <Route path='/users'
                               render={() => <UsersContainer />}/>
                    </Switch>
                </div>
            </div>

        </BrowserRouter>
    )
}

export default App;

