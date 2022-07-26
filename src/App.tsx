import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';

function App() {
    return (

        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profile}/>*/}
                    {/*<Route path='/music' component={Music}/>*/}
                    {/*<Route path='/news' component={News}/>*/}
                    {/*<Route path='/settings' component={Settings}/>*/}
                    <Route path='/dialogs' render={()=><Dialogs/>}/>
                    <Route path='/profile' render={()=><Profile/>}/>



                </div>
            </div>
        </BrowserRouter>
    );


}

export default App;
