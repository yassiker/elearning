const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginRequest = credentials => ({
  type: LOGIN_REQUEST,
  credentials
});

export const loginSuccess = response => ({
  type: LOGIN_SUCCESS,
  response
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  error
});

export default {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  loginRequest,
  loginSuccess,
  loginFailure
};
