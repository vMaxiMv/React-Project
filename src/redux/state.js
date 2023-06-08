import { rerenderTree } from "../rerender";

const state = {
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
};
//debugger;
export const appPostFunc = () => {
  let newPost = {
    id: 3,
    message: state.ProfilePage.newPostText,
    likes: 0,
  };
  state.ProfilePage.Posts.push(newPost);
  state.ProfilePage.newPostText = "";
  rerenderTree(state);
};

export const updateNewPostText = (Newtext) => {
  state.ProfilePage.newPostText = Newtext;
  rerenderTree(state);
};

export default state;
