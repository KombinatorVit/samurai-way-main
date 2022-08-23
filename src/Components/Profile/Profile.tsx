import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props: any) => {



    return <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer  />
    </div>;
};
export default Profile;