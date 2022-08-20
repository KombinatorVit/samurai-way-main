import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';

function App(props: any) {


    return (

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profile}/>*/}
                    {/*<Route path='/music' component={Music}/>*/}
                    {/*<Route path='/news' component={News}/>*/}
                    {/*<Route path='/settings' component={Settings}/>*/}
                    <Route path="/dialogs"
                           render={() => <DialogsContainer  />}/>
                    <Route path="/profile"
                           render={() => <Profile />}/>

                    <Route path="/users"
                           render={() => <UsersContainer />}/>

                </div>
            </div>
    );


}

export default App;
