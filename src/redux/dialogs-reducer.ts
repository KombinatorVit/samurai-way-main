const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi Hi Hi'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}],
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Vit'},
        {id: 3, name: 'Kata'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Bob'},
        {id: 6, name: 'Misha'}],
    newMessageBody: ''

};

const dialogsReducer = (state: any = initialState, action: any) => {

    switch (action.type) {


        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
            };
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody:any) => ({type: SEND_MESSAGE, newMessageBody})
export default dialogsReducer;