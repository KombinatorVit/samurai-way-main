import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';



const mapStateToProps = (state:any) => {return{
posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
}}
const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPostText: (text: any) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action)
        },
        addPost: () => {dispatch(addPostActionCreator());
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;