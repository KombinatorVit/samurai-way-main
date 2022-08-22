import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

import {Route} from 'react-router-dom';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import {Login} from './Components/Login/Login';
function App(props: any) {


    return (

            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar/>
                <div className="app-wrapper-content">
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profile}/>*/}
                    {/*<Route path='/music' component={Music}/>*/}
                    {/*<Route path='/news' component={News}/>*/}
                    {/*<Route path='/settings' component={Settings}/>*/}
                    <Route path="/dialogs"
                           render={() => <DialogsContainer  />}/>
                    <Route path="/profile/:userId?"
                           render={() => <ProfileContainer />}/>

                    <Route path="/users"
                           render={() => <UsersContainer />}/>
                    <Route path="/login"
                           render={() => <Login />}/>

                </div>
            </div>
    );


}

export default App;
