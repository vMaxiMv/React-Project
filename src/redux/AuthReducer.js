import {UsersApiObj} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'

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
        ...action.data,
        isAuth: true
      };
    default:
      return state;
  }
};

export const SetAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data:{userId,email,login} });


export const  authMeThunk = ()=>{ // Так как запрос на сервер никаких параметров не принимаето, то можно ничего не передавать во внешнюю функцию
  return(dispatch)=>{
    UsersApiObj.authMeFunc()
        .then(response => {

          if(response.data.resultCode === 0){
            let {id, email,login} = response.data.data
            dispatch(SetAuthUserData(id, email,login))

          }
        })
  }
  }

export default AuthReducer;
