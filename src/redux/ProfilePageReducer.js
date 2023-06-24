const AddPost = "ADD-POST";
const UpdateNewPostText = "UPDATE-NEW-POST-TEXT";
const SELECT_PROFILE = "SELECT_PROFILE";

let initialState = {
  Posts: [
    { id: 1, message: "Hello, guys", likes: "30" },
    { id: 2, message: "Bye", likes: "12" },
  ],
  newPostText: "Maxxx",
  profile: null,
};

const ProfilePageReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case AddPost:
      stateCopy = {
        ...state,
        newPostText: "",
        Posts: [
          ...state.Posts,
          {
            id: 3,
            message: state.newPostText,
            likes: 0,
          },
        ],
      };

      return stateCopy;
    case UpdateNewPostText:
      stateCopy = { ...state, newPostText: action.Newtext };
    case SELECT_PROFILE:
      stateCopy = { ...state, profile: action.profile };
      return stateCopy;
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
export const selectProfileAC = (profile) => {
  return { type: "SELECT_PROFILE", profile: profile };
};

export default ProfilePageReducer;
