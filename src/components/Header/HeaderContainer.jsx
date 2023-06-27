import React, {useEffect} from 'react';
import axios from "axios";
import Header from "./Header";
import { SetAuthUserData} from "../../redux/AuthReducer";
import {connect} from "react-redux";

function HeaderContainer(props) {
    useEffect(()=> {
            axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{
                withCredentials:true
            })
                .then(response => {

                    if(response.data.resultCode === 0){
                        let {id, email,login} = response.data.data
                        props.SetAuthUserData(id, email,login)

                    }
                    // props.SetAuthUserData(response.data.data.login)
                })
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
export default connect(mapStateToProps,{SetAuthUserData})(HeaderContainer);