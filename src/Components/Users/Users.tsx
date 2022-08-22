import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/img/img.png';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

let Users = (props: any) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map((p:any) => {
                // @ts-ignore
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={() => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map((u: any) => <div key={u.id}>
                <span>
                    <div>
                       <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}
                             className={styles.userPhoto} alt={'foto'}/>
                       </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button  disabled={props.followingInProgress.some((id:number) => id === u.id)}
                                       onClick={() => { props.unfollow(u.id) }}>
                                Unfollow</button>
                            : <button disabled={props.followingInProgress.some((id:number) => id === u.id)}
                                      onClick={() => { props.follow(u.id) }}>
                                Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;