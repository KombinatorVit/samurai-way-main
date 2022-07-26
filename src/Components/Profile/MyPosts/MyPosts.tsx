import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props:any) => {



    let postsElements = props.posts.map((p:any) => <Post message={p.message} likesCount={p.likesCount}/>);


let newPostElement: any  = React.createRef()

    const addPostButtonHandler = () => {
let text = newPostElement.current.value
alert(text)
}
    return (
        <div className={s.postsBlock}>
            <h3> My posts
            </h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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