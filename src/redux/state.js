const AddPost = "ADD-POST";
const UpdateNewPostText = "UPDATE-NEW-POST-TEXT";
const UpdateNewMessageBody = "UPDATE_NEW_MESSAGE_BODY";
const SendMessage = "SEND_MESSAGE";

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
    if (action.type === AddPost) {
      let newPost = {
        id: 3,
        message: this._state.ProfilePage.newPostText,
        likes: 0,
      };
      this._state.ProfilePage.Posts.push(newPost);
      this._state.ProfilePage.newPostText = "";
      this._rerenderTree(this._state);
    } else if (action.type === UpdateNewPostText) {
      this._state.ProfilePage.newPostText = action.Newtext;
      this._rerenderTree(this._state);
    } else if (action.type === UpdateNewMessageBody) {
      this._state.MessangerPage.newMessageBody = action.body;
      this._rerenderTree(this._state);
    } else if (action.type === SendMessage) {
      let body = this._state.MessangerPage.newMessageBody;
      this._state.MessangerPage.MessangerTextArray.push({ id: 4, text: body });
      this._state.MessangerPage.newMessageBody = "";
      this._rerenderTree(this._state);
    }
  },
};
export const addPostActionCreator = () => {
  return { type: "ADD-POST" };
};
export const updatePostTextActionCreator = (text) => {
  return { type: "UPDATE-NEW-POST-TEXT", Newtext: text };
};
export const sendMessageCreator = () => {
  return { type: "SEND_MESSAGE" };
};
export const updateNewMessageBodyCreator = (body) => {
  return { type: "UPDATE_NEW_MESSAGE_BODY", body: body };
};

export default store;
