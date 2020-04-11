import React, { Component } from "react";

import Header from "../components/Header";

import { consonants, vowels, semivowels } from "../containers/tifinaghLetters";
import { Link } from "react-router-dom";

import cedarLogo from "../assets/images/cedfin.png";

class TifinaghLetter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: null,
      play: false,
      letterTypes: [
        {
          type: "vowels"
        },
        {
          type: "semivowels"
        },
        {
          type: "consonants"
        }
      ],
      active: null,
      sectionName: "vowels"
    };
  }

  componentWillMount() {
    this.setState({
      letters: vowels.letters
    });
  }

  togglePlay = sound => {
    const audio = new Audio(
      require(`../assets/sounds/lettersounds/${this.state.letterTypes[0].type}/${sound}.mp3`)
    );
    audio.play();
  };

  renderLetter = () => {
    return this.state.letters.map((item, index) => {
      return (
        <div className="item">
          <div style={styles.letterContainer}>
            <h1 style={styles.newText}>{item.latin}</h1>
            <h1 style={styles.secondText}>{item.arabic}</h1>
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
                {item.tifinagh}
              </h1>
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
              <i
                className="fa fa-volume-up"
                style={{ fontSize: "6rem", color: "white" }}
                onClick={() => this.togglePlay(item.sound)}
              />
            </div>
          </div>
        </div>
      );
    });
  };

  myColor = position => {
    if (this.state.active === position) {
      return "#00a65a";
    }
    return "";
  };

  toggle = (position, item, key) => {
    switch (position) {
      case 0:
        this.setState({
          active: null,
          sectionName: item,
          letters: consonants.letters
        });
        break;
      case 1:
        this.setState({
          // active: null,
          sectionName: item,
          letters: semivowels.letters
        });
        break;
      case 2:
        this.setState(
          {
            active: null,
            sectionName: item,
            letters: consonants.letters
          },
          () => console.log("leteers: " + JSON.stringify(this.state.letters))
        );
        break;
      default:
        console.log("nothing");
    }
  };

  renderSideMenu = () => {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <ul className="sidebar-menu">
            <li
              className="header"
              style={{
                height: 57,
                backgroundColor: "white",
                fontSize: 20,
                color: "#00a65a",
                display: "flex",
                justifyContent: "center",
                borderLeft: "3px solid red",
                borderRight: "3px solid #00a65a",
                margin: 0,
                alignItems: "center"
              }}
            >
              {"Unit 0"}
            </li>

            {this.state.letterTypes.map((item, index) => {
              return (
                <li
                  className={
                    index === 0
                      ? `treeview active`
                      : `treeview ${this.state.active}`
                  }
                  key={index}
                  style={{
                    background: this.myColor(index),
                    cursor: "pointer"
                  }}
                  onClick={() => {
                    this.toggle(index, item.type, "dialog");
                  }}
                >
                  <a
                    style={{
                      color: "black",
                      background: this.myColor(index)
                    }}
                  >
                    <span>{item.type}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </aside>
    );
  };

  render() {
    if (!this.state.letters) {
      return <div>Loading....</div>;
    }
    return (
      <div style={{ flex: 1, height: "100%" }}>
        <Header />
        {/* <Sidebar updateDialog={this.updateUnitDialog} login /> */}
        {this.renderSideMenu()}
        {/* <Sidebar unit0 /> */}
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

const styles = {
  newText: {
    flex: 1,
    background: "orange",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 0
  },
  letterContainer: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "red"
  },
  secondText: {
    flex: 1,
    background: "#00a65a",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 0
  }
};
