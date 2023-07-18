import React from 'react';
import Header from "./Header";
import { logoutThunk, SetAuthUserData} from "../../redux/AuthReducer";
import {connect} from "react-redux";


function HeaderContainer(props) {
    return (
        <Header {...props}/>
    );
}
const mapStateToProps = (state)=>({
    isAuth: state.Auth.isAuth,
    login:state.Auth.login

})
export default connect(mapStateToProps,{SetAuthUserData, logoutThunk})(HeaderContainer);