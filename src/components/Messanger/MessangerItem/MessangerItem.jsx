import messangerStyle from './../Messanger.module.css';
import { NavLink } from "react-router-dom"

const MessangerItem = (props) => {
    let path = '/Messanger/' + props.id
    return <div className={messangerStyle.dialog}>
        <NavLink to={path}>{props.name}</NavLink></div>
}

export default MessangerItem;