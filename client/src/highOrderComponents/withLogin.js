import { connect } from 'react-redux';
import composeWithLogin from '../containers/LoginContainer/composeWithLogin';
import { selectIsLoggedIn } from '../store/login/selectors';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: selectIsLoggedIn()(state),
  };
};

export default function withLogin(WrappedComponent) {
  return connect(mapStateToProps)(composeWithLogin(WrappedComponent));
}
