import * as types from "./ActionType";

const getAuthRequest = () => {
    return { type: types.GET_AUTH_REQUEST };
  };
  
  const getAuthSuccess = (payload) => {
    return { type: types.GET_AUTH_SUCCESS, payload };
  };
  
  const getAuthFailure = () => {
    return { type: types.GET_AUTH_FAILURE };
  };

  const getAuthLogout= () => {
    return { type: types.GET_AUTH_LOGOUT };
  };
  
  export { getAuthRequest, getAuthFailure, getAuthSuccess ,getAuthLogout};
  