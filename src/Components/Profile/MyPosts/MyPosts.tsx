import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props:any) => {



    let postsElements = props.posts.map((p:any) => <Post message={p.message} likesCount={p.likesCount}/>);


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