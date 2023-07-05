import React from "react";
import {Navigate} from "react-router-dom";

export const withAuthRedirect = (Component) =>{
    let RedirectComponent = (props)=>{
        if(!props.isAuth) return <Navigate to='/Login' />
        return <Component {...props} />
    }
    return RedirectComponent
}
