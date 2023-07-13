// import {UsersApiObj} from "../api/api";
// import {SetAuthUserData} from "./AuthReducer";
//
// const UPDATE_FORM_DATA = "UPDATE_FORM_DATA";
//
//
// const initialState = {
//     login: null,
//     password: null,
//     rememberMe: false
// };
//
// const formReducer = (state = initialState, action) =>{
//     switch (action.type){
//         case UPDATE_FORM_DATA:
//             return {
//                 ...state,
//                 ...action.payload
//             };
//         default:
//             return state;
//     }
// }
//
// export const UpdateFormDataAC = (formData)=>{
//     return {
//         type: UPDATE_FORM_DATA,
//         payload: formData
//     }
// }
//
//
// export const loginThunk = (email, password, rememberMe)=>(dispatch) => {
//     UsersApiObj.loginFunc(email, password, rememberMe)
//         .then(response =>{
//             if(response.data.resultCode === 0){
//                 dispatch(SetAuthUserData())
//             }
//         })
// }
//
//
//
// export default formReducer