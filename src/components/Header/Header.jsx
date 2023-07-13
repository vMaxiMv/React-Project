import h from './Header.module.css';
import {NavLink} from "react-router-dom";
import {logoutThunk} from "../../redux/AuthReducer";

const Header = (props) => {
  return (
    <header className={h.header}>
      <img src="https://code-basics.com/assets/images/waiting_clock-780e59c781f15a27516b9f5ae78f33622f3e37fb941e2a1165410aeb411c6537.digested.png" />
        <div className={h.loginBlock}>
            {props.isAuth
                ? <div>{props.login} --- <button onClick={props.logoutThunk}>Logout</button> </div>
                : <NavLink to={"/login"}>Login</NavLink>}

        </div>
    </header>
  )
}
export default Header;