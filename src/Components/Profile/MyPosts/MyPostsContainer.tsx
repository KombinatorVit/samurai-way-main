import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';


const MyPostsContainer = (props: any) => {
    // let state = props.store.getState();


    return (
        <StoreContext.Consumer>
            {
            (store: any) => {
                let addPost = () => {
                    store.dispatch(addPostActionCreator());

                };

                let onPostChange = (text: any) => {

                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                };

                return <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={store.getState().profilePage.posts}
                                newPostText={store.getState().profilePage.newPostText}/>;
            }
        }
        </StoreContext.Consumer>
    );

};
export default MyPostsContainer;