import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatustWithHooks from './ProfileStatustWithHooks';
import ProfileStatusWithHooks from './ProfileStatustWithHooks'


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className={s.content}>
      <div>
        <img src="https://cs9.pikabu.ru/post_img/big/2017/03/14/3/1489457282190868320.jpg" />
      </div>
      <div className={s.avaDisc}>
        <img src={props.profile.photos.large} />
      </div>
        <ProfileStatustWithHooks status={props.status} updateStatus={props.updateStatus}/>
    </div>
  )
}

export default ProfileInfo