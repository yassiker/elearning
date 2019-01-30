import React, { Component } from "react";

// import letterIcon from "../assets/images/letters/yaj.jpg";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import tifinaghLetters from "../containers/tifinaghLetters";
import { Link } from "react-router-dom";

import cedarLogo from "../assets/images/cedfin.png";

class TifinaghLetter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: null
    };
  }

  componentWillMount() {
    this.setState({
      letters: tifinaghLetters.letters
    });
  }

  renderLetter = () => {
    return this.state.letters.map((item, index) => {
      return (
        <div className="item" key={index}>
          <div style={{ flex: "1", display: "flex", flexDirection: "column" }}>
            <h1
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              {item.latin}
            </h1>
            <h1
              style={{
                flex: "1",
                background: "white",
                color: "green",
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
                backgroundColor: "white",
                justifyContent: "center"
              }}
            >
              <img
                src={require(`../assets/images/letters/${item.letterIcon}`)}
                alt=""
              />
            </div>

            <div
              style={{
                flex: "1",
                cursor: "pointer",
                justifyContent: "center",
                display: "flex",
                alignItems: "center"
              }}
            >
              <i
                className="fa fa-volume-up"
                style={{ fontSize: "6rem", color: "orange" }}
              />
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

            {/* <section
          className="content-header"
          style={{
            borderBottom: "0px solid black",
            flex: 1,
            boxShadow: "0px 0px 10px #00a65a",
            padding: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Link to="/" onClick={this.forceUpdate}>
            <img
              src={cedarLogo}
              style={{ position: "absolute", top: "-22px", left: "-30px" }}
              alt=""
            />
          </Link>

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

          <Link to="/unitTable" onClick={this.forceUpdate}>
            <button
              className="btn btn-success pull-right"
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
        </section> */}

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

                {/* <div className="item">
            <h1>B</h1>
          </div>
          <div className="item">
            <h1>C</h1>
          </div>
          <div className="item">
            <h1>D</h1>
          </div>
          <div className="item">
            <h1>E</h1>
          </div>
          <div className="item">
            <h1>F</h1>
          </div>
          <div className="item">
            <h1>G</h1>
          </div>
          <div className="item">
            <h1>H</h1>
          </div>
          <div className="item">
            <h1>I</h1>
          </div>
          <div className="item">
            <h1>J</h1>
          </div>
         */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TifinaghLetter;
