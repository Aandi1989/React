import s from './Header.module.css';
import { NavLink } from 'react-router-dom';


const Header = (props)=>{
    return (
        <header className={s.header}>
      <img src="https://seeklogo.com/images/E/Escudo_de_Venezuela-logo-5568A30CE0-seeklogo.com.png"/>

      <div className={s.loginBlock}>
       {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>} 
      </div>
    </header>
    )
}

export default Header