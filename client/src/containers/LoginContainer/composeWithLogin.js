//@flow
import * as React from 'react';
import LoginContainer from './index';

type WithLoginProps = {
  isLoggedIn: boolean,
};

const composeWithLogin = (WrappedComponent): React.ComponentType<WithLoginProps> => {
  return class WithLogin extends React.PureComponent<WithLoginProps> {
    render(): React.Node {
      const { isLoggedIn } = this.props;
      return isLoggedIn ? <WrappedComponent {...this.props} /> : <LoginContainer {...this.props} />;
    }
  };
};

export default composeWithLogin;
