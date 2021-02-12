import Post from './Post/Post'
import s from './MyPosts.module.css'
import React from 'react';

const MyPosts = (props) => {
  
let newPostElement= React.createRef();

  let addPost=()=>{
  props.dispatch({type:'ADD-POST'})
}

let onPostChange=()=>{
  let  text=newPostElement.current.value;
  props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText:text})
}

let postsElements=props.posts.map( p=><Post message={p.message} like={p.like} /> )

  return (
    <div>
      <div className={s.stuff}>
        <h4>My posts</h4>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        <div className={s.button}>
          <button onClick={addPost} >Add post</button>
        </div>
      </div>
      {postsElements}
     
    </div >

  )
}

export default MyPosts