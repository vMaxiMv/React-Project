import {UsersApiObj} from "../api/api";
import {FollowAC, toggleFollowingDisableAC} from "./UsersPageReducer";

const AddPost = "ADD-POST";
const UpdateNewPostText = "UPDATE-NEW-POST-TEXT";
const SELECT_PROFILE = "SELECT_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  Posts: [
    { id: 1, message: "Hello, guys", likes: "30" },
    { id: 2, message: "Bye", likes: "12" },
  ],
  newPostText: "Maxxx",
  profile: null,
  status: ""
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
      return stateCopy = { ...state, newPostText: action.Newtext };
    case SELECT_PROFILE:
      return stateCopy = { ...state, profile: action.profile };
    case SET_STATUS:
      return stateCopy = {...state, status: action.status}
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
export const setStatusAC = (status) => {
  return { type: "SET_STATUS", status:status };
};


export const profileThunk = (userId)=> {
  return (dispatch) => {
    UsersApiObj.profileFunc(userId)
        .then(response => {
          dispatch(selectProfileAC(response.data))
        })
  }
}
export const getStatusThunk = (userId)=> {
  return (dispatch) => {
    UsersApiObj.getStatusFunc(userId)
        .then(response => {

          dispatch(setStatusAC(response.data))
        })
  }
}
export const updateStatusThunk = (status)=> {
  return (dispatch) => {
    UsersApiObj.updateStatusFunc(status)
        .then(response => {
          if(response.data.resultCode === 0) dispatch(setStatusAC(status))
        })
  }
}

export default ProfilePageReducer;
