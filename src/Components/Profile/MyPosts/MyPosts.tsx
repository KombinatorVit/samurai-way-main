import React, {RefObject} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props: any) => {


    let postsElements = props.posts.map((p: any) => <Post message={p.message} likesCount={p.likesCount}/>);


    let newPostElement : RefObject<HTMLTextAreaElement> = React.createRef();


    const onAddPost = () => {
        props.addPost();


    };

    let onPostChange = () => {
        let text = newPostElement.current?.value;
        props.updateNewPostText(text);

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
                    <button onClick={onAddPost}>Add post</button>
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