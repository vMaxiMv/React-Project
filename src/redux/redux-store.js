import { combineReducers, legacy_createStore as createStore } from "redux";
import MessangerPageReducer from "./MessangerPageReducer";
import ProfilePageReducer from "./ProfilePageReducer";
import UsersPageReducer from "./UsersPageReducer";

let reducers = combineReducers({
  MessangerPage: MessangerPageReducer,
  ProfilePage: ProfilePageReducer,
  UsersPage: UsersPageReducer,
});

let store = createStore(reducers);

export default store;
