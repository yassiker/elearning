import React, { Component } from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

class LoginScreen extends Component {
  render() {
    return (
      <div style={{ flex: 1, height: "100%" }}>
        <Header />
        <Sidebar />
        <div
          className="content-wrapper"
          style={{
            display: "flex",
            flex: 1
          }}
        >
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <div style={{ flex: 7, display: "flex" }} />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginScreen;
