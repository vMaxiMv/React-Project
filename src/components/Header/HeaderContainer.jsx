import React, {useEffect} from 'react';
import axios from "axios";
import Header from "./Header";
import {authMeThunk, logoutThunk, SetAuthUserData} from "../../redux/AuthReducer";
import {connect} from "react-redux";
import {UsersApiObj} from "../../api/api";

function HeaderContainer(props) {
    useEffect(()=> {
        props.authMeThunk()
        }
    )

    return (
        <Header {...props}/>
    );
}
const mapStateToProps = (state)=>({
    isAuth: state.Auth.isAuth,
    login:state.Auth.login

})
export default connect(mapStateToProps,{SetAuthUserData,authMeThunk, logoutThunk})(HeaderContainer);