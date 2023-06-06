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
    MyPostArray: [
      { id: 1, message: "Hello, guys", likes: "30" },
      { id: 2, message: "Bye", likes: "12" },
    ],
  },
};
//debugger;
export const appPostFunc = (postMessage) => {
  let newPost = {
    id: 3,
    message: postMessage,
    likes: 0,
  };
  state.ProfilePage.MyPostArray.push(newPost);
  rerenderTree(state);
};

export default state;
