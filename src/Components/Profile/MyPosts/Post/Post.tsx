import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    message:string
    likesCount: number
}
const Post = (props: PostPropsType) => {
    return (

        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZlzRAgn5texvHcFrcTp1CgHC9spjiJOyjD9x03hDVw&s"
                alt="avatar"/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>

    );
};
export default Post;