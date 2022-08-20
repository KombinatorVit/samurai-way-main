import React from 'react';
import styles from './users.module.css';

let Users = (props: any) => {
if (props.users.length === 0){
    props.setUsers([
        {
            id: 1,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdNbOAeLiW12h0oePngSU4Vksf5ieVFvBwxQ&usqp=CAU',
            followed: false,
            fullName: 'Dmitry',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'},
        },
        {
            id: 1,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdNbOAeLiW12h0oePngSU4Vksf5ieVFvBwxQ&usqp=CAU',
            followed: true,
            fullName: 'Vital',
            status: 'I am a boss too',
            location: {city: 'Dnipro', country: 'Ukraine'},
        },
        {
            id: 1,
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdNbOAeLiW12h0oePngSU4Vksf5ieVFvBwxQ&usqp=CAU',
            followed: false,
            fullName: 'Sasha',
            status: 'I am a boss too',
            location: {city: 'Warszawa', country: 'Poland'},
        },
    ],)}
    return <div>
        {
            props.users.map((u: any) => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
{
    u.followed
        ? <button onClick={() => {
            props.unfollow(u.id);
        }}>Unfollow</button>

        : <button onClick={() => {
            props.follow(u.id);
        }}>Follow</button>

}

                    </div>

                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>

                </span>

            </div>)
        }
    </div>;
};

export default Users;