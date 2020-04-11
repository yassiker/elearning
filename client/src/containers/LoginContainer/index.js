import React, { Component } from "react";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import LoginComponent from "./loginScreen";
import { connect } from "react-redux";
import { selectAttemptLogin } from "../../store/login/selectors";
import LoginActions from "../../store/login/actions";

type Props = {
  attemptLoginLoading: string
};
class LoginContainer extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      userName: null,
      password: null,
      emailFieldIsEmpty: false,
      passwordFieldIsEmpty: false
    };
  }

  onChangeUserName = event => {
    const { value } = event.target;
    this.setState({
      userName: value,
      emailFieldIsEmpty: false
    });
  };
  onChangePassword = event => {
    const { value } = event.target;
    this.setState({
      password: value,
      passwordFieldIsEmpty: false
    });
  };

  submitLogin = () => {
    const { userName, password } = this.state;
    if (userName && userName.length > 0 && password && password.length > 0) {
      this.props.attemptLogin(userName, password);
      this.props.history.push("/home");
    }
    if (!userName)
      this.setState({
        emailFieldIsEmpty: true
      });
    if (!password)
      this.setState({
        passwordFieldIsEmpty: true
      });
  };

  render() {
    const { passwordFieldIsEmpty, emailFieldIsEmpty } = this.state;
    const { attemptLoginLoading } = this.props;
    return (
      <div style={{ flex: 1, height: "100%" }}>
        <Header noHeader />
        <Sidebar />
        <div className="content-wrapper" style={{ display: "flex", flex: 1 }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <LoginComponent
              onChangePassword={event => this.onChangePassword(event)}
              onChangeUserName={event => this.onChangeUserName(event)}
              submitLogin={this.submitLogin}
              loading={!attemptLoginLoading}
              passwordFieldIsEmpty={passwordFieldIsEmpty}
              emailFieldIsEmpty={emailFieldIsEmpty}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    attemptLogin: (userName, password) => dispatch(LoginActions.loginRequest(userName, password))
  };
};

const mapStateToProps = state => {
  return {
    attemptLoginLoading: selectAttemptLogin()(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
