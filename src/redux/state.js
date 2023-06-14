import MessangerPageReducer from "./MessangerPageReducer";
import ProfilePageReducer from "./ProfilePageReducer";

let store = {
  _state: {
    MessangerPage: {
      MessangerItemArray: [
        { id: 1, name: "Maxim" },
        { id: 2, name: "Ivan" },
        { id: 3, name: "Masha" },
        { id: 4, name: "Dima" },
      ],
      MessangerTextArray: [
        { id: 1, text: "Hello, man" },
        { id: 2, text: "How are you" },
        { id: 3, text: "Okay" },
      ],
      newMessageBody: "",
    },
    ProfilePage: {
      Posts: [
        { id: 1, message: "Hello, guys", likes: "30" },
        { id: 2, message: "Bye", likes: "12" },
      ],
      newPostText: "Maxxx",
    },
  },
  _rerenderTree() {},
  getState() {
    return this._state;
  },

  wonder(observer) {
    this._rerenderTree = observer;
  },
  dispatch(action) {
    this._state.ProfilePage = ProfilePageReducer(
      this._state.ProfilePage,
      action
    );
    this._state.MessangerPage = MessangerPageReducer(
      this._state.MessangerPage,
      action
    );
    this._rerenderTree(this._state);
  },
};

export default store;
