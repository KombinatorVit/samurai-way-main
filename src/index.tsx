import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It"s my first post!', likesCount: 11},
    {id: 3, message: 'My Friend!', likesCount: 1},
    {id: 4, message: 'You good !', likesCount: 10},
    {id: 5, message: 'Yo Yo Y Yo Yo', likesCount: 9},
];

let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Vit'},
    {id: 3, name: 'Kata'},
    {id: 4, name: 'Sveta'},
    {id: 5, name: 'Bob'},
    {id: 6, name: 'Misha'}];

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hi Hi Hi'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'}];

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);