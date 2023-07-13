import React from 'react';
import {useForm} from "react-hook-form";
import {loginThunk} from "../../redux/AuthReducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

// password = ipdpndnpp47
function LoginForm(props){
    const {register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        props.login(data.email, data.password, data.rememberMe)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input placeholder={'email'} type="email" {...register('email')}/>
                </div>
                <div>
                    <input placeholder={'Password'} type="password" {...register('password')}/>
                </div>
                <div>
                    <input type="checkbox" {...register('rememberMe')}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
}


const mapStateToProps = (state)=>{
    return{
        isAuth: state.Auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password, rememberMe) => dispatch(loginThunk(email, password, rememberMe)),
    };
};


function Login(props) {
    if(props.isAuth) return <Navigate to='/Profile' />

    return(
        <div>
            <h1>Login</h1>
            <LoginForm login={props.login}/>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);