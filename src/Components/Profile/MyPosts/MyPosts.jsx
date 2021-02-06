import Post from './Post/Post'
import s from './MyPosts.module.css'

const MyPosts = () => {
  
  let post=[
    {id:1, message:'Hi man! How are you doing?', like:2},
    {id:2, message:'I am realy sick and tired of this shit!', like:15}
    
]

let postsElements=post.map( p=><Post message={p.message} like={p.like} /> )

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
      {/* <Post message={postData[0].message} like={postData[0].like} />
      <Post message={postData[1].message} like={postData[1].like}/>
       */}
    </div >

  )
}

export default MyPosts