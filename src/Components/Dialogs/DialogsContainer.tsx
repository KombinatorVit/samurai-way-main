import React, {ChangeEvent} from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';


const DialogsContainer = () => {




    return (
        <StoreContext.Consumer>
            {
                (store:any) => {
                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator());

                    };
                    let onNewMessageChange = (body: any) => {
                        store.dispatch(updateNewMessageBodyCreator(body));
                    };

                    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                                    dialogsPage={store.getState().dialogsPage}/>;
                }

            }
        </StoreContext.Consumer>
    );

};

export default DialogsContainer;