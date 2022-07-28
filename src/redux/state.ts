
let rerenderEntireTree = (props:any)  => console.log('State is changed')


type MessagesType = {
    id: number
    message: string
}
type DialogsType = {
    id: number
    name: string
}
type PostType = {
    id: number
    message: string
    likesCount: number
}
type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>

}

type ProfilePageType ={
    posts: Array<PostType>
    newPostText: string
}

type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType

}

let state : StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It"s my first post!', likesCount: 11},
            {id: 3, message: 'My Friend!', likesCount: 1},
            {id: 4, message: 'You good !', likesCount: 10},
            {id: 5, message: 'Yo Yo Y Yo Yo', likesCount: 9},
        ],
        newPostText: 'it-kamasutra'
    },

    dialogsPage: {
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
    }

}



export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ''
    rerenderEntireTree(state);
};


export const updateNewPostText = (newText: any) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};


export const subscribe =(observer:any) => {
    rerenderEntireTree = observer
}

export default state;