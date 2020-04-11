export function userReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_USER_REQUEST":
      return {
        ...state,
        fetchUserLoading: true
      };
    case "FETCH_USER_RESPONSE":
      return {
        ...state,
        fetchUserLoading: false,
        userRole: action.userRole
      };
    case "FETCH_USER_FAILE":
      return {
        ...state,
        fetchUserLoading: false
      };
    default:
      return state;
  }
}

const initialState = {
  userRole: "Teacher",
  fetchUserLoading: false
};
