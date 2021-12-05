import Post from './Post/Post';
import s from './MyPosts.module.css';
import React from 'react';
import { Field, reduxForm } from 'redux-form';


const MyPosts = (props) => {

  let sendNewPost=(values)=>{
    props.addPost(values.newPostBody)
  }

  let postsElements = props.posts.map(p => <Post message={p.message} like={p.like} />)

  return (
    <div>
      <div className={s.stuff}>
        <h4>My posts</h4>
      <ReduvPostForm onSubmit={sendNewPost}/>
      </div>
      {postsElements}
    </div >
  )
}

const newPostForm=(props)=>{
  return(
    <form onSubmit={props.handleSubmit}>
      <Field component="textarea" name="newPostBody" placeholder="type new post"/>
    <div className={s.button}>
      <button>Add post</button>
    </div>
  </form>
  )
}

const ReduvPostForm=reduxForm({form:"NewPostBody"})(newPostForm);


export default MyPosts