import { combineReducers, legacy_createStore as createStore } from "redux";
import MessangerPageReducer from "./MessangerPageReducer";
import ProfilePageReducer from "./ProfilePageReducer";
import UsersPageReducer from "./UsersPageReducer";
import AuthReducer from "./AuthReducer";

let reducers = combineReducers({
  MessangerPage: MessangerPageReducer,
  ProfilePage: ProfilePageReducer,
  UsersPage: UsersPageReducer,
  Auth: AuthReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
