import React, {useEffect} from 'react';
import axios from "axios";
import Header from "./Header";
import {authMeThunk, logoutThunk, SetAuthUserData} from "../../redux/AuthReducer";
import {connect} from "react-redux";
import {UsersApiObj} from "../../api/api";

function HeaderContainer(props) {
    useEffect(()=> {
            // axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{
            //     withCredentials:true
            // })

        // UsersApiObj.authMeFunc()
        //         .then(response => {
        //
        //             if(response.data.resultCode === 0){
        //                 let {id, email,login} = response.data.data
        //                 props.SetAuthUserData(id, email,login)
        //
        //             }
        //             // props.SetAuthUserData(response.data.data.login)
        //         })

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