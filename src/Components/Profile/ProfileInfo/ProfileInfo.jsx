import Preloader from '../../Common/Preloader/Preloader'
import s from './ProfileInfo.module.css'

const ProfileInfo=(props)=>{
  if(!props.profile){
    return <Preloader/>
  }
    return(
        <div className={s.content}>
      <div>
        <img src="https://cs9.pikabu.ru/post_img/big/2017/03/14/3/1489457282190868320.jpg" />
      </div>
      <div className={s.avaDisc}>
        <img src={props.profile.photos.large}/>
        ava + description
      </div>
      </div>
    )
}

export default ProfileInfo