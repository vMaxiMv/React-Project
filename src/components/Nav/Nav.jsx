import Navigation from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={Navigation.nav}>
      <div className={Navigation.item}>
        <a href="/Profile">Profile</a>
      </div>
      <div className={Navigation.item}>
        <a href="/Messanger"> Messanger</a>
      </div>
      <div className={Navigation.item}>
        <a>News</a>
      </div>
      <div className={Navigation.item}>
        <a>Music</a>
      </div>
      <div className={Navigation.item}>
        <a>Settings</a>
      </div>
    </nav>
  )
}
export default Nav;