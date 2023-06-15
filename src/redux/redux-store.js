import { combineReducers, legacy_createStore as createStore } from "redux";
import MessangerPageReducer from "./MessangerPageReducer";
import ProfilePageReducer from "./ProfilePageReducer";

let reducers = combineReducers({
  MessangerPage: MessangerPageReducer,
  ProfilePage: ProfilePageReducer,
});

let store = createStore(reducers);

export default store;
