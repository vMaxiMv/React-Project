import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import MessangerPageReducer from "./MessangerPageReducer";
import ProfilePageReducer from "./ProfilePageReducer";
import UsersPageReducer from "./UsersPageReducer";
import AuthReducer from "./AuthReducer";
import thunkMiddleware from 'redux-thunk'
import formReducer from "./formReducer";

let reducers = combineReducers({
  MessangerPage: MessangerPageReducer,
  ProfilePage: ProfilePageReducer,
  UsersPage: UsersPageReducer,
  Auth: AuthReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
