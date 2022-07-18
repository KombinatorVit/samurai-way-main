import React from "react"
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props: any) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}

const Message = (props: any) => {
    return <div className={s.message}>{props.message}</div>

}


const Dialogs = (props: any) => {

    let dialogsData = [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Vit' },
        { id: 3, name: 'Kata' },
        { id: 4, name: 'Sveta' },
        { id: 5, name: 'Bob' },
        { id: 6, name: 'Misha' }]

        let messagesData = [
            { id: 1, message: "Hi" },
            { id: 2, message: "Hi Hi Hi" },
            { id: 3, message: "Yo" },
            { id: 4, message: "Yo" },
            { id: 5, message: "Yo" }]

        let dialogElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
        
        let messageElements = messagesData.map(m =><Message message={m.message} id={m.id}/>)
   
       
       
            return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               
           {dialogElements} 

            </div>
            <div className={s.messages}>
            {messageElements}
            
            </div>
        </div>
    )

}

export default Dialogs;