import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";

const App = () => {
  return (
      <div className='app-wrapper'>
       <Header />
        <Navbar />
        <Profile/>
      </div>)}

export default App;