import React from 'react'
import messangerStyle from './Messanger.module.css';
import { NavLink } from "react-router-dom"
import MessangerItem from './MessangerItem/MessangerItem';
import MessangerText from './MessangerText/MessangerText';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/MessangerPageReducer';


<div>
    <MessangerItem />
    <MessangerText />
</div>

const addMessageReact = React.createRef()

const Messanger = (props) => {
    const onSendMessageClick = () => {
        props.onSendMessageClickCallBack()
    }
    const onNewMessageChange = () => {
        const text = addMessageReact.current.value;
        props.onNewMessageChangeCallBack(text)
    }

    const NewMessangerItemArray = props.MessangerPageItem.map(item => <MessangerItem name={item.name} id={item.id} />) // Просто пробегаемся по массиву объектов, обращаясь каждому элкменту массива через map и отображая его в jsx размете
    const NewMessangerTextArray = props.MessangerPageText.map(item => <MessangerText className={messangerStyle.text} text={item.text} />)
    return (
        <div className={messangerStyle.messanger}>
            <div className={messangerStyle.messanger_items}>

                {NewMessangerItemArray}

            </div>
            <div className={messangerStyle.messages}>
                <div>{NewMessangerTextArray}</div>
                <div><textarea ref={addMessageReact} placeholder='Введите сообщение' value={props.newMessageBody} onChange={onNewMessageChange}></textarea></div>
                <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
        </div>
    )
}
export default Messanger;