const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TATAL_COUNT = "SET_TATAL_COUNT";
const SET_IS_FETCHING = "SET_IS_FETCHING";

let initialState = {
  users: [
    // {
    //   id: 1,
    //   fullname: "Maxim",
    //   imageUrl:
    //     "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png",
    //   followed: true,
    //   status: "Whats up!",
    //   location: { city: "Moscow", country: "Russia" },
    // },
    // {
    //   id: 2,
    //   fullname: "Ivan",
    //   imageUrl:
    //     "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png",
    //   followed: false,
    //   status: "Hey men!",
    //   location: { city: "NewYork", country: "USA" },
    // },
    // {
    //   id: 3,
    //   fullname: "Oleg",
    //   imageUrl:
    //     "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png",
    //   followed: true,
    //   status: "WTF",
    //   location: { city: "Tver", country: "Russia" },
    // },
  ],
  usersOnPageCount: 5,
  totalUsersCount: 0,
  currentPage: 1,
  loadingStatus: true,
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
    default:
      return state;
  }
};

export const FollowAC = (userId) => ({ type: FOLLOW, userId });
export const UnFollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const SetUsersAC = (users) => ({ type: SET_USERS, users });
export const SetPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const SetTotalValueAC = (totalUsersCount) => ({
  type: SET_TATAL_COUNT,
  allUsers: totalUsersCount,
});
export const SetIsFetchingAC = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching,
});

export default UsersPageReducer;
