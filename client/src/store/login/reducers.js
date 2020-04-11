import Actions from "./actions";

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.LOGIN_REQUEST:
      return {
        ...state,
        attemptLoginLoading: false
      };
    case Actions.LOGIN_SUCCESS:
      return {
        ...state,
        attemptLoginLoading: false,
        isLoggin: action.response
      };
    case Actions.LOGIN_FAILURE:
      return {
        ...state,
        loginError: action.error
      };
    default:
      return state;
  }
}

const initialState = {
  attemptLoginLoading: false,
  loginError: null,
  isLoggin: false
};
