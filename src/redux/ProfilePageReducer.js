const AddPost = "ADD-POST";
const UpdateNewPostText = "UPDATE-NEW-POST-TEXT";

let initialState = {
  Posts: [
    { id: 1, message: "Hello, guys", likes: "30" },
    { id: 2, message: "Bye", likes: "12" },
  ],
  newPostText: "Maxxx",
};

const ProfilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case AddPost:
      let newPost = {
        id: 3,
        message: state.newPostText,
        likes: 0,
      };
      state.Posts.push(newPost);
      state.newPostText = "";
      return state;
    case UpdateNewPostText:
      state.newPostText = action.Newtext;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return { type: "ADD-POST" };
};
export const updatePostTextActionCreator = (text) => {
  return { type: "UPDATE-NEW-POST-TEXT", Newtext: text };
};

export default ProfilePageReducer;
