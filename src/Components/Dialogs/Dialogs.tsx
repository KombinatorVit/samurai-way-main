import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

// type DialogsPropsType = {
//     updateNewMessageBody: (body: string)=> void
//     sendMessage: ()=> void
//     dialogsPage: DialogsType
// }

const Dialogs = (props: any) => {

    let state = props.dialogsPage;
    let dialogElements = state.dialogs.map((d: any) => <DialogItem name={d.name} id={d.id} key={d.id}/>);

    let messageElements = state.messages.map((m: any) => <Message message={m.message} id={m.id} key={m.id}/>);
    let newMessageBody = state.newMessageBody;


    let addNewMessage = (values:any) => {
        props.sendMessage(values.newMessageBody);

    }
    if (!props.isAuth) return <Redirect to={"/login"} /> ;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogElements}

            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>


                </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
    );

};

    const AddMessageForm = (props:any) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />
                </div>
                <div><button>Send</button></div>
            </form>
        )
    }

    const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

    export default Dialogs;
