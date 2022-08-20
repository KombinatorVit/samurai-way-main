const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
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
        case UPDATE_NEW_MESSAGE_BODY:
            return  {
                ...state,
                newMessageBody: action.body
            };

        case SEND_MESSAGE:
            let body = state.newMessageBody;

            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}],
            };
        default:
            return state;
    }
};
export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    };
};

export const updateNewMessageBodyCreator = (body: any) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    };
};
export default dialogsReducer;