import messangerStyle from './Messanger.module.css';
import { NavLink } from "react-router-dom"
import MessangerItem from './MessangerItem/MessangerItem';
import MessangerText from './MessangerText/MessangerText';

<div>
    <MessangerItem />
    <MessangerText />
</div>


const Messanger = (props) => {



    const NewMessangerItemArray = props.MessangerItemArray.map(item => <MessangerItem name={item.name} id={item.id} />) // Просто пробегаемся по массиву объектов, обращаясь каждому элкменту массива через map и отображая его в jsx размете
    const NewMessangerTextArray = props.MessangerTextArray.map(item => <MessangerText text={item.text} />)
    return (
        <div className={messangerStyle.messanger}>
            <div className={messangerStyle.messanger_items}>

                {NewMessangerItemArray}

            </div>
            <div className={messangerStyle.messages}>
                {NewMessangerTextArray}
            </div>
        </div>
    )
}
export default Messanger;