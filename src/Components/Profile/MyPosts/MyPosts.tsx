import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';




const MyPosts = (props: any) => {


    let postsElements = props.posts.map((p: any) => <Post message={p.message} likesCount={p.likesCount}/>);


    let newPostElement: any = React.createRef();

    const addPostButtonHandler = () => {
        props.dispatch(addPostActionCreator());


    };

    let onPostChange = () => {
        let text = newPostElement.current.value;

        // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action);
    };


    return (
        <div className={s.postsBlock}>
            <h3> My posts
            </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPostButtonHandler}>Add post</button>
                    <button>Remove</button>

                </div>

                New post
            </div>
            <div className={s.posts}>

                {postsElements}

            </div>
        </div>
    );
};
export default MyPosts;