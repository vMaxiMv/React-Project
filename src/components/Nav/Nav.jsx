import { NavLink } from 'react-router-dom';
import Navigation from './Nav.module.css';


const Nav = () => {
  const setActive = ({ isActive }) => (isActive ? Navigation.active : Navigation.item);

  return (
    <nav className={Navigation.nav}>
      <NavLink to="/Profile" className={setActive}>
        <div className={Navigation.item}>
          <img src='https://pixlok.com/wp-content/uploads/2021/10/User-Profile-Icon-9mces.png' />
          <span > Profile</span>
        </div>
      </NavLink>
      <NavLink to="/Messanger" className={setActive}>
        <div className={Navigation.item}>
          <img src='https://www.svgrepo.com/show/39559/message.svg' />
          <span > Messanger</span>
        </div>
      </NavLink>
      <NavLink to="/News" className={setActive}>
        <div className={Navigation.item}>
          <img src='https://icons.veryicon.com/png/o/miscellaneous/effevo/news-262.png' />
          <span> News</span>
        </div>
      </NavLink>
      <NavLink to="/Music" className={setActive}>
        <div className={Navigation.item}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Noun_project_-_Music_notes.svg/800px-Noun_project_-_Music_notes.svg.png' />
          <span> Music</span>
        </div>
      </NavLink>
      <NavLink to="/Settings" className={setActive}>
        <div className={Navigation.item}>
          <img src='https://cdn2.iconfinder.com/data/icons/multimedia-collection-13/128/200211-04-512.png' />
          <span> Settings</span>
        </div>
      </NavLink>
    </nav>
  )
}
export default Nav;