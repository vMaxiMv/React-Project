import {UsersApiObj} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TATAL_COUNT = "SET_TATAL_COUNT";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "TOGGLE_IS_FOLLOWING_IN_PROGRESS"


let initialState = {
  users: [

  ],
  usersOnPageCount: 5,
  totalUsersCount: 0,
  currentPage: 1,
  loadingStatus: true,
  followingInProgress: []
};

const UsersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) return { ...u, followed: true };
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) return { ...u, followed: false };
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: [...action.users] };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TATAL_COUNT:
      return { ...state, totalUsersCount: action.allUsers };
    case SET_IS_FETCHING:
      return { ...state, loadingStatus: action.isFetching };
    case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
      return { ...state, followingInProgress: action.isFetching ?
            [...state.followingInProgress, action.userId]
            : state.followingInProgress.filter(id=>id!=action.userId)
      };
    default:
      return state;
  }
};

export const FollowAC = (userId) => ({ type: FOLLOW, userId });
export const UnFollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const SetUsersAC = (users) => ({ type: SET_USERS, users });
export const SetPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage,});
export const SetTotalValueAC = (totalUsersCount) => ({type: SET_TATAL_COUNT, allUsers: totalUsersCount,});
export const SetIsFetchingAC = (isFetching) => ({type: SET_IS_FETCHING, isFetching,});
export const toggleFollowingDisableAC = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFetching, userId});

export const getUsersThunk = (currentPage,usersOnPageCount)=> {
  return (dispatch) => {
    dispatch(SetIsFetchingAC(true))
    UsersApiObj.getUsersFunc(currentPage, usersOnPageCount)
        .then(data => {

          dispatch(SetUsersAC(data.items))
          dispatch(SetTotalValueAC(data.totalCount))
          dispatch(SetIsFetchingAC(false))
          dispatch(SetPageAC(currentPage))
        })
  }
}

export const followThunk = (userId)=> {
  return (dispatch) => {
    dispatch(toggleFollowingDisableAC(true, userId))
    UsersApiObj.followUrlFunc(userId)
        .then(response => {
          if(response.data.resultCode===0) dispatch(FollowAC(userId))
          dispatch(toggleFollowingDisableAC(false, userId))
        })
  }
}

export const unfollowThunk = (userId)=> {
  return (dispatch) => {
    dispatch(toggleFollowingDisableAC(true, userId))
    UsersApiObj.unfollowUrlFunc(userId)
        .then(response => {
          if(response.data.resultCode===0) dispatch(UnFollowAC(userId))
          dispatch(toggleFollowingDisableAC(false, userId))
        })
  }
}


export default UsersPageReducer;
