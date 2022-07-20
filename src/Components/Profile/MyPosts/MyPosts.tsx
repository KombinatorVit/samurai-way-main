import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    const posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It"s my first post!', likesCount: 11},
        {id: 3, message: 'My Friend!', likesCount: 1},
        {id: 4, message: 'You good !', likesCount: 10},
        {id: 5, message: 'Yo Yo Y Yo Yo', likesCount: 9},

    ];

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);


    return (
        <div className={s.postsBlock}>
            <h3> My posts
            </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
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