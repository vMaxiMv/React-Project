let store = {
  _state: {
    MessangerPage: {
      MessangerItemArray: [
        { id: 1, name: "Maxim" },
        { id: 2, name: "Ivan" },
        { id: 3, name: "Masha" },
      ],
      MessangerTextArray: [
        { id: 1, text: "Hello, man" },
        { id: 2, text: "How are you" },
        { id: 3, text: "Okay" },
      ],
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
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 3,
        message: this._state.ProfilePage.newPostText,
        likes: 0,
      };
      this._state.ProfilePage.Posts.push(newPost);
      this._state.ProfilePage.newPostText = "";
      this._rerenderTree(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.ProfilePage.newPostText = action.Newtext;
      this._rerenderTree(this._state);
    }
  },
};

export default store;
