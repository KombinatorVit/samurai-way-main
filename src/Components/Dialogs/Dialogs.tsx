import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props: any) => {

let state = props.dialogsPage;
    let dialogElements = state.dialogs.map((d: any) => <DialogItem name={d.name} id={d.id}/>);

    let messageElements = state.messages.map((m: any) => <Message message={m.message} id={m.id}/>);
    let newMessageBody = state.newMessageBody


    let onSendMessageClick = () => {
        props.sendMessage();

    }
    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
let body = e.currentTarget.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogElements}

            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'>  Введите текст </textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );

};

export default Dialogs;