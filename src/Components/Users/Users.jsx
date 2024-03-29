import React from 'react';
import userPhoto from '../../assets/images/unknownUser.png';
import styles from './users.module.css';
import { NavLink } from 'react-router-dom';

let Users=(props)=>{
        
    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }
    
        return <div>            
            <div>
                { pages.map( p => {
                    if (p<=props.currentPage+5 && p>=props.currentPage-5 ){
                    return <span className={props.currentPage ===  p && styles.selectedPage }
                    onClick={(e) => { props.onPageChanged(p); }}>{p}</span>}
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/'+u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.isFollowingProgress.some(id=>id === u.id)} onClick={() => {
                                
                                props.setUnfollow(u.id)
                                
                            }   
                            }>Unfollow</button>
                            : <button disabled={props.isFollowingProgress.some(id=>id === u.id)} onClick={() => {
                         
                                props.setFollow(u.id)
                                
                            }}>Follow</button>}

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
export default Users