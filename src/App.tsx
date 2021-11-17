import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StateType} from "./Redux/state";


export type appPropsType = {
    state: StateType
    addPost: (newPostText: string) => void
    updateNewPostText: (newText:string) => void
}

const App = (props:appPropsType) => {
    console.log('props: ', props)
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className = 'app-wrapper-content'>
                    <Route path = '/dialogs'
                           render= { () => <Dialogs state = {props.state.dialogsPage}/>
                    }/>
                    <Route path = '/profile'
                           render={ () => <Profile profilePage = {props.state.profilePage}
                           addPost = {props.addPost} updateNewPostText = {props.updateNewPostText} /> } />
                </div>
            </div>

        </BrowserRouter>
                        )
}

export default App;

