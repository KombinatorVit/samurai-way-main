import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props: any) => {


    let postsElements = props.posts.map((p: any) => <Post message={p.message} likesCount={p.likesCount}/>);


    let newPostElement: any = React.createRef();

    const addPostButtonHandler = () => {
        props.dispatch({type: 'ADD-POST'});


    };

    let onPostChange = () => {
        let text = newPostElement.current.value;

        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
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