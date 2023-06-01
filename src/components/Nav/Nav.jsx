import { NavLink } from 'react-router-dom';
import Navigation from './Nav.module.css';


const Nav = () => {
  const setActive = ({ isActive }) => (isActive ? Navigation.active : Navigation.item);
  return (
    <nav className={Navigation.nav}>
      <div className={Navigation.item}>
        <NavLink to="/Profile" className={setActive}>Profile</NavLink>
      </div>
      <div className={Navigation.item}>
        <NavLink to="/Messanger" className={setActive}> Messanger</NavLink>
      </div>
      <div className={Navigation.item}>
        <NavLink to="/News" className={setActive}> News</NavLink>
      </div>
      <div className={Navigation.item}>
        <NavLink to="/Music" className={setActive}> Music</NavLink>
      </div>
      <div className={Navigation.item}>
        <NavLink to="/Settings" className={setActive}> Settings</NavLink>
      </div>
    </nav>
  )
}
export default Nav;