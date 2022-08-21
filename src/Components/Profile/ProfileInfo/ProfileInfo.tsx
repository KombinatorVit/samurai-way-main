import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props:any) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (<div>
    <div>
      <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' alt='img' />
    </div>
    <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
      <div><span>{props.profile.fullName}</span></div>
      <div><span>{props.profile.lookingForAJobDescription}</span></div>
      <div><span>{props.profile.contacts.github}</span></div>
      ava + description
    </div>
    </div>
  )
}
export default ProfileInfo;