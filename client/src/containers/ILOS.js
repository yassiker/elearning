import React, { Component } from "react";

import cedarLogo from "../assets/images/cedfin.png";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

class ILOS extends Component {
  render() {
    return (
      <div style={{ flex: 1, height: "100%" }}>
        <Header />
        <Sidebar updateDialog={this.updateUnitDialog} />
        <div
          className="content-wrapper"
          style={{
            display: "flex",
            flex: 1
          }}
        >
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <div
              style={{
                flex: 1,
                display: "flex",
                borderBottom: "0px solid black",
                boxShadow: "0px 0px 10px #00a65a",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div
                style={{
                  flex: 1,
                  color: "#00a65a"
                }}
              >
                <img src={cedarLogo} alt="" style={{ height: "60px" }} />
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  color: "#00a65a"
                }}
              >
                <h3 style={{ margin: 0 }}>ILOS</h3>
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "flex-end"
                }}
              >
                <button className="btn btn-success">Text Here</button>
              </div>
            </div>

            <div style={{ flex: 7, display: "flex" }} />
          </div>
        </div>
      </div>
    );
  }
}

export default ILOS;
