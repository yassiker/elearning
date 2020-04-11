import React, { Component } from "react";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import LoginComponent from "./loginScreen";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: null,
      password: null,
      loading: false,
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
    this.setState({
      loading: true
    });
    if (userName && userName.length > 0 && password && password.length > 0)
      this.props.history.push("/home");
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
    const { loading, passwordFieldIsEmpty, emailFieldIsEmpty } = this.state;
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
              loading={loading}
              passwordFieldIsEmpty={passwordFieldIsEmpty}
              emailFieldIsEmpty={emailFieldIsEmpty}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginContainer;
