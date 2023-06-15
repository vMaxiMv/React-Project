import React from 'react'

import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/MessangerPageReducer';
import Messanger from './Messanger';



const MessangerContainer = (props) => {
    const state = props.store.getState();

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    const onNewMessageChange = (text) => {
        props.store.dispatch(updateNewMessageBodyCreator(text))
    }

    return (
        <Messanger onSendMessageClickCallBack={onSendMessageClick} onNewMessageChangeCallBack={onNewMessageChange} MessangerPageItem={state.MessangerPage.MessangerItemArray} MessangerPageText={state.MessangerPage.MessangerTextArray} newMessageBody={state.MessangerPage.newMessageBody} />
    )
}
export default MessangerContainer;