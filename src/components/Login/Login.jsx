import React from 'react';
import {useForm} from "react-hook-form";
import {loginThunk} from "../../redux/AuthReducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import loginStyles from '../Messanger/Messanger.module.css'

// password = ipdpndnpp47
function LoginForm(props){
    const {register, handleSubmit, formState:{errors} } = useForm()
    const onSubmit = (data) => {
        props.login(data.email, data.password, data.rememberMe)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input placeholder={'email'} type="email" {...register('email',
                        {required:'Введите почту',
                        maxLength:{
                            value:50,
                            message: 'Почта не должна содержать более 50 символов'
                        }}
                    )} className={errors.email ? loginStyles.inputError : undefined}/>
                </div>
                <div>
                    <input placeholder={'Password'} type="password" {...register('password',
                        {required:'Введите пароль',
                            minLength:{
                                value:4,
                                message: 'Пароль не может содержать менее 4 символов'
                            }}
                    )}  className={errors.password ? loginStyles.inputError : undefined}/>
                </div>
                <div>
                    <input type="checkbox" {...register('rememberMe')}/> remember me
                </div>
                {errors.email && (<p className={loginStyles.errorMessage}>{errors.email.message}</p>)}
                {errors.password && (<p className={loginStyles.errorMessage}>{errors.password.message}</p>)}
                <div>
                    <button type="submit" disabled={Object.keys(errors).length > 0}>Login</button>
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