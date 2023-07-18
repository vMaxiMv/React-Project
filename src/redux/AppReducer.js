import {authMeThunk} from "./AuthReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
  initialized: false
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
      case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      };
    default:
      return state;
  }
};

export const InitializedSuccess = () => ({ type: INITIALIZED_SUCCESS });


export const  initializeAppThunk = () => (dispatch)=>{
    const promise = dispatch(authMeThunk())

    promise
        .then(()=>{
        dispatch(InitializedSuccess())
    })

  }


export default AppReducer;
