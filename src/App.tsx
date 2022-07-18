import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>

            <Navbar/>
            <Profile/>
            <div className='app-wrapper-content'> </div>
        </div>
    )


}

export default App;
