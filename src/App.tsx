import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsType, MessageType, PostsDataType} from "./index";


type appPropsType = {
    posts:Array<PostsDataType>
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
const App = (props:appPropsType) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className = 'app-wrapper-content'>
                    <Route path = '/dialogs' render= { () =>
                         <Dialogs dialogs = {props.dialogs}
                                 messages = {props.messages}/>
                    }/>
                    <Route path = '/profile' render={ () => <Profile posts = {props.posts}/> } />
                </div>
            </div>

        </BrowserRouter>
                        )
}

export default App;

