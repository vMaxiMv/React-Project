import React from 'react'

import {addMessageCreator, sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/MessangerPageReducer';
import Messanger from './Messanger';

import { connect } from 'react-redux';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



// const MessangerContainer = (props) => {


//     return <StoreContext.Consumer>
//         {
//             (store) => {
//                 const state = store.getState();

//                 const onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator())
//                 }
//                 const onNewMessageChange = (text) => {
//                     store.dispatch(updateNewMessageBodyCreator(text))
//                 }

//                 return <Messanger onSendMessageClickCallBack={onSendMessageClick} onNewMessageChangeCallBack={onNewMessageChange} MessangerPageItem={state.MessangerPage.MessangerItemArray} MessangerPageText={state.MessangerPage.MessangerTextArray} newMessageBody={state.MessangerPage.newMessageBody} />
//             }
//         }
//     </StoreContext.Consumer>
//}

// let redirectComponent = withAuthRedirect(Messanger)
const mapStateToProps = (state) => {
    return {

        MessangerPage: state.MessangerPage,
        newMessageBody: state.MessangerPage.newMessageBody,
        isAuth: state.Auth.isAuth
    }
}




// const MessangerContainer = connect(mapStateToProps, mapDispatchToProps)(redirectComponent)

export default compose(
    connect(mapStateToProps),
    withAuthRedirect)
(Messanger);