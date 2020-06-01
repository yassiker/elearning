import { combineReducers } from 'redux';
import { loginReducer as login } from './login/reducers';
import { userReducer as user } from './User/reducers';
import { reducer as toastr } from 'react-redux-toastr';

export default combineReducers({
  login,
  user,
  toastr,
});
