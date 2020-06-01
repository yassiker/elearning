import Actions from './actions';

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.LOGIN_REQUEST:
      return {
        ...state,
        attemptLoginLoading: false,
        isLoggedIn: false,
      };
    case Actions.LOGIN_SUCCESS:
      return {
        ...state,
        attemptLoginLoading: false,
        isLoggedIn: action.response,
      };
    case Actions.LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        loginError: action.error,
      };
    default:
      return state;
  }
}

const initialState = {
  attemptLoginLoading: false,
  loginError: null,
  isLoggedIn: false,
};
