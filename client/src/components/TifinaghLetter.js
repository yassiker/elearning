import React, { Component } from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import tifinaghLetters from "../containers/tifinaghLetters";
import { Link } from "react-router-dom";

import cedarLogo from "../assets/images/cedfin.png";

class TifinaghLetter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: null,
      play: false
    };
  }

  audio = new Audio(require("../assets/sounds/plane.wav"));

  componentWillMount() {
    this.setState({
      letters: tifinaghLetters.letters
    });
  }

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  };

  renderLetter = () => {
    return this.state.letters.map((item, index) => {
      return (
        <div className="item" key={index}>
          <div style={{ flex: "1", display: "flex", flexDirection: "column", backgroundColor: "red" }}>
            <h1
              style={{
                flex: 1,
                background: "orange",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 0
              }}
            >
              {item.latin}
            </h1>
            <h1
              style={{
                flex: 1,
                background: "#00a65a",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 0
              }}
            >
              {item.arabic}
            </h1>
          </div>
          <div style={{ flex: "1", display: "flex", flexDirection: "column" }}>
            <div
              style={{
                flex: "1",
                display: "flex",
                backgroundColor: "#00a65a",
                justifyContent: "center",
                width: "100%",
                height: "100%"
              }}
            >
              <img src={require(`../assets/images/letters/${item.letterIcon}`)} alt="" style={{ maxWidth: "100%", maxHeight: "100%" }} />
            </div>

            <div
              style={{
                flex: "1",
                cursor: "pointer",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                background: "orange"
              }}
            >
              <i className="fa fa-volume-up" style={{ fontSize: "6rem", color: "white" }} onClick={this.togglePlay} />
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    if (!this.state.letters) {
      return <div>Loading....</div>;
    }
    return (
      <div style={{ flex: 1, height: "100%" }}>
        <Header />
        {/* <Sidebar updateDialog={this.updateUnitDialog} /> */}
        <Sidebar unit0 />
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
              flexDirection: "column",
              width: 0
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
                <Link to="/" onClick={this.forceUpdate}>
                  <img src={cedarLogo} alt="" style={{ height: "60px" }} />
                </Link>
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <Link to="/unit0" onClick={this.forceUpdate}>
                  <img
                    src={require(`../assets/images/blackboardIcon.png`)}
                    style={{
                      height: "50px",
                      cursor: "pointer"
                    }}
                    alt=""
                  />
                </Link>
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "flex-end",
                  marginRight: 10
                }}
              >
                <Link to="/unitTable" onClick={this.forceUpdate}>
                  {" "}
                  <button
                    className="btn btn-success"
                    onClick={this.viewAll}
                    style={{
                      marginRight: "10px",
                      whiteSpace: "normal",
                      width: 150
                    }}
                  >
                    letters and words written in tifinagh
                  </button>
                </Link>
              </div>
            </div>

            <div style={{ flex: 8, display: "flex", flexDirection: "column" }}>
              <div
                id="sync1"
                className="owl-carousel owl-theme"
                style={{
                  flex: 2,
                  display: "flex",
                  alignItems: "center"
                }}
              >
                {this.renderLetter()}
              </div>
              <div
                id="sync2"
                className="owl-carousel owl-theme"
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                {this.state.letters.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="item"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "60px"
                      }}
                    >
                      <h1 style={{ margin: 0 }}>{item.tifinagh}</h1>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TifinaghLetter;
