import React from 'react';
import styles from './users.module.css';

let Users = (props) => {

    if(props.users.length === 0){
        props.setUsers([
        { id: 1,photoUrl:'https://cdn.onebauer.media/one/empire-tmdb/films/1966/images/cLOekK7EmHB1beYUYEXIlcr6mpS.jpg?format=jpg&quality=80&width=440&ratio=16-9&resize=aspectfill',followed:false, fullName: 'Alex', status: 'I am free right now', location:{city:'Minsk', country:'Belarus'} },
        { id: 2,photoUrl:'https://cdn.onebauer.media/one/empire-tmdb/films/1966/images/cLOekK7EmHB1beYUYEXIlcr6mpS.jpg?format=jpg&quality=80&width=440&ratio=16-9&resize=aspectfill', followed:true, fullName: 'Dmitry', status: 'I am tired after work', location:{city:'Vilnius', country:'Lithuania'} },
        { id: 3,photoUrl:'https://cdn.onebauer.media/one/empire-tmdb/films/1966/images/cLOekK7EmHB1beYUYEXIlcr6mpS.jpg?format=jpg&quality=80&width=440&ratio=16-9&resize=aspectfill', followed:false, fullName: 'Vitaly', status: 'I gonna to sleep', location:{city:'Lviv', country:'Ukraine'} }
        ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed 
                        ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                         : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
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
    </div>
}

export default Users
