import React from 'react';
import './App.css';
import Navbar from "./Components/Nav/Nav";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
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

