import React, { Component } from "react";

import board from "../assets/images/Blackboard.png";
import cedarLogo from "../assets/images/cedfin.png";
import LetterContainer from "../components/LetterContainer";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

class BaseUnit extends Component {
  displayLetterList = () => {};
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
          <div
            style={{
              flex: 1,
              display: "flex",

              flexDirection: "column"
            }}
          >
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
                <h3 style={{ margin: 0 }}>Unit 0</h3>
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "flex-end",
                  marginRight: 5
                }}
              >
                <button className="btn btn-success" onClick={this.displayLetterList}>
                  <Link to="/letter" onClick={this.forceUpdate}>
                    See List
                  </Link>
                </button>
              </div>
            </div>

            <div
              style={{
                flex: 7,
                display: "flex",
                margin: 10,
                padding: 10,
                backgroundImage: `url(${board})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            >
              <div
                style={{
                  display: "flex",
                  flex: 1,
                  zIndex: 1000
                }}
              >
                <LetterContainer />
              </div>
              {/* <img style={{ width: "50%" }} src={board} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BaseUnit;
