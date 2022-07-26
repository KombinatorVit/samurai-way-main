import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props: any) => {

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

    let dialogElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messageElements = messages.map(m => <Message message={m.message} id={m.id}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogElements}

            </div>
            <div className={s.messages}>
                {messageElements}

            </div>
        </div>
    );

};

export default Dialogs;