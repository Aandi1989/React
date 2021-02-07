import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  
//   let posts=[
//     {id:1, message:'Hi man! How are you doing?', like:2},
//     {id:2, message:'I am realy sick and tired of this shit!', like:15}
    
// ]
  
  return (
    <div className={s.content}>
      <ProfileInfo/>
      <MyPosts posts={props.posts}/>
    </div>
  )
}

export default Profile