import Post from './Post/Post'
import s from './MyPosts.module.css'

const MyPosts = (props) => {
  


let postsElements=props.posts.map( p=><Post message={p.message} like={p.like} /> )

  return (
    <div>
      <div className={s.stuff}>
        <h4>My posts</h4>
        <textarea></textarea>
        <div className={s.button}>
          <button>Add post</button>
        </div>
      </div>
      {postsElements}
     
    </div >

  )
}

export default MyPosts