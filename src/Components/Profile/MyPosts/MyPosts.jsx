import Post from './Post/Post';
import s from './MyPosts.module.css';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {required, maxLengthCreator} from './../../utils/validators/validators';
import { Textarea } from '../../Common/FormsControls/FormsControls';


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

const maxLength10 = maxLengthCreator(10);

const newPostForm=(props)=>{
  return(
    <form onSubmit={props.handleSubmit}>
      <Field component={Textarea} name="newPostBody" placeholder="type new post"
       validate={[required, maxLength10]}/>
    <div className={s.button}>
      <button>Add post</button>
    </div>
  </form>
  )
}

const ReduvPostForm=reduxForm({form:"NewPostBody"})(newPostForm);


export default MyPosts