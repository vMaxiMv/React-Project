import {UsersApiObj} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  userId:null,
  email:null,
  login:null,
  isAuth:false
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data
      };
    default:
      return state;
  }
};

export const SetAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data:{userId,email,login, isAuth} });


export const  authMeThunk = ()=>{ // Так как запрос на сервер никаких параметров не принимает, то можно ничего не передавать во внешнюю функцию
  return(dispatch)=>{
    UsersApiObj.authMeFunc()
        .then(response => {

          if(response.data.resultCode === 0){
            let {id, email,login} = response.data.data
            dispatch(SetAuthUserData(id, email,login, true))

          }
        })
  }
  }
export const  loginThunk = (email, password, rememberMe)=>{
  return(dispatch)=>{
    UsersApiObj.loginFunc(email, password, rememberMe)
        .then(response => {
          if(response.data.resultCode === 0) dispatch(authMeThunk())
          //if(response.data.resultCode!==0) alert("Неверное что-то")
        })
  }
}
export const  logoutThunk = ()=>{
  return(dispatch)=>{
    UsersApiObj.logoutFunc()
        .then(response => {
          if(response.data.resultCode === 0) dispatch(SetAuthUserData(null, null, null, false))
        })
  }
}

export default AuthReducer;
