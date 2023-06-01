import messangerStyle from './../Messanger.module.css';



const MessangerText = (props) => {
    return <div className={messangerStyle.message}>{props.text}</div>
}

export default MessangerText;