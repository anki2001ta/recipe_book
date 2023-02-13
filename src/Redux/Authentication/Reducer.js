import * as types from "./ActionType"
import {  getAuthRequest, getAuthFailure, getAuthSuccess,getAuthLogout} from "./Action";
const initState = {
  isLoading: false,
  token: null,
  isError: false,
  userData: [] ,
};
const reducer = (state = initState, action) => {
  const { type, payload } = action;
//   console.log(payload,"reducer")
  switch (type) {
    case types.GET_AUTH_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case types.GET_AUTH_SUCCESS:
        initState.userData.push(payload.userData)
      return { ...state, isLoading: false,token:payload.token, isError:false };

    case types.GET_AUTH_FAILURE:
      return { ...state, isError: true };
    case types.GET_AUTH_LOGOUT:
      return { ...state, isError: false, token: null ,userData:[]};
    default:
      return state;
  }
};
export { reducer };
