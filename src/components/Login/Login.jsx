import React from 'react';
import {useForm} from "react-hook-form";

function LoginForm(props){
    const {register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input placeholder={'Login'} type="login" {...register('login')}/>
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



function Login(props) {
    return(
        <div>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    )
}

export default Login;