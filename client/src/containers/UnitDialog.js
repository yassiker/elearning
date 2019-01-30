import React, { Component } from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import cedarLogo from "../assets/images/cedfin.png";
import { Link } from "react-router-dom";
import { Radio } from "react-bootstrap";

import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";

// import myvideo from "../assets/videos/dialog1.mp4";

const material = [
  {
    name: "Dialog 1",
    videoSource: require("../assets/videos/dialog1.mp4")
  },
  {
    name: "Dialog 2",
    videoSource: require("../assets/videos/dialog2.mp4")
  }
];

// const practiceSet = [
//   {
//     name: "Practice 1"
//   },
//   {
//     name: "Practice 2"
//   }
// ];

class UnitDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      disablePreviousButton: true,
      disableNextButton: false,
      showVideoList: false,
      unitVideos: [
        {
          title: "videoTitle1",
          videoSource: "source1"
        },
        {
          title: "videoTitle2",
          videoSource: "source2"
        }
      ],
      selectedVideo: material[0].name,
      videoSource: material[0].videoSource,
      key: "dialog"
    };
  }

  // watchNextVideo = () => {
  //   if (this.state.position < this.state.unitVideos.length - 1) {
  //     this.setState({
  //       position: this.state.position + 1,
  //       disablePreviousButton: false
  //     });
  //   } else {
  //     this.setState({
  //       disableNextButton: true
  //     });
  //   }
  // };

  // watchPreviousVideo = () => {
  //   console.log("watchPreviousVideo");
  //   if (this.state.position - 1 < 0) {
  //     this.setState({
  //       disablePreviousButton: true
  //     });
  //   } else {
  //     this.setState({
  //       disableNextButton: false,
  //       position: this.state.position - 1
  //     });
  //   }
  // };

  updateUnitDialog = (dialog, position, key) => {
    this.setState({
      selectedVideo: dialog,
      position,
      videoSource: material[position].videoSource,
      key
    });
  };

  renderReading = () => {
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
                margin: 0
              }}
            >
              {"Unit"}
            </li>
            <li className="treeview">
              <a>
                <i className="fa fa-book" /> <span>Dialog</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li className="">
                  <a
                    onClick={() =>
                      this.setState({
                        videoSource: material[0].videoSource,
                        selectedVideo: material[0].name
                      })
                    }
                  >
                    {" "}
                    <Radio name="radioGroup">Dialog 1</Radio>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      this.setState({
                        videoSource: material[1].videoSource,
                        selectedVideo: material[1].name
                      })
                    }
                  >
                    <Radio name="radioGroup">Dialog 2</Radio>
                  </a>
                </li>
              </ul>
            </li>

            <li className="treeview">
              <a>
                <i className="fa fa-pencil" />
                <span>Practice</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li className="active">
                  <a>
                    <i className="fa fa-circle-o" /> Practice 1
                  </a>
                </li>
                <li>
                  <a>
                    <i className="fa fa-circle-o" /> Practice 1
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <Link to="/addDialog" onClick={this.forceUpdate}>
          <button
            type="button"
            className="btn btn-default btn-circle"
            style={{
              flex: 1,
              display: "flex",
              width: "100px",
              height: "100px",
              padding: "6px 0px",
              borderRadius: "50px",
              textAlign: "center",
              fontSize: "12px",
              lineHeight: "1.42857",
              backgroundColor: "black",
              position: "absolute",
              bottom: 0,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <span style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
              Add Dialog
            </span>
            <span style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
              +
            </span>
          </button>
        </Link>

        <Link to="/addPractice" onClick={this.forceUpdate}>
          <button
            type="button"
            className="btn btn-default btn-circle"
            style={{
              flex: 1,
              display: "flex",
              width: "100px",
              height: "100px",
              padding: "6px 0px",
              borderRadius: "50px",
              textAlign: "center",
              fontSize: "12px",
              lineHeight: "1.42857",
              backgroundColor: "white",
              position: "absolute",
              bottom: 0,
              right: 0,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <span style={{ color: "black", fontSize: 15, fontWeight: "bold" }}>
              Add Practice
            </span>
            <span style={{ color: "black", fontSize: 25, fontWeight: "bold" }}>
              +
            </span>
          </button>
        </Link>
      </aside>
    );
  };

  render() {
    return (
      <div style={{ flex: 1, height: "100%" }}>
        <Header />
        {this.renderReading()}
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
              justifyContent: "center",
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
                <h3 style={{ margin: 0 }}>{this.state.selectedVideo}</h3>
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "flex-end",
                  marginRight: 5
                }}
              >
                <Link to="/dialogList" onClick={this.forceUpdate}>
                  <button
                    className="btn btn-success"
                    onClick={() =>
                      this.setState({
                        showVideoList: true
                      })
                    }
                  >
                    See List
                  </button>
                </Link>
              </div>
            </div>

            <div
              style={{
                flex: 7,
                display: "flex",
                padding: 10
              }}
            >
              <div
                style={{
                  flex: 1,

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                {/* <ul className="pager" style={{ flex: 1 }}>
                  <li
                    style={{
                      fontSize: "25px",
                      cursor: this.state.disablePreviousButton
                        ? "unset"
                        : "pointer"
                    }}
                    onClick={this.watchPreviousVideo}
                  >
                    <a
                      style={{
                        backgroundColor: this.state.disablePreviousButton
                          ? "transparent"
                          : "red",
                        visibility: this.state.disablePreviousButton
                          ? "hidden"
                          : "visible"
                      }}
                    >
                      Previous
                    </a>
                  </li>
                </ul>
               */}
              </div>
              <div
                style={{
                  flex: 7,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 10
                }}
              >
                {this.state.key === "dialog" ? (
                  <Player
                    playsInline
                    src={this.state.videoSource}
                    style={{ flex: 1 }}
                  />
                ) : (
                  <h3>"Put this dialogue into the right order." </h3>
                )}
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                {/* <ul className="pager" style={{ flex: 1 }}>
                  <li
                    style={{
                      fontSize: "25px",
                      cursor: this.state.disableNextButton ? "unset" : "pointer"
                    }}
                    onClick={this.watchNextVideo}
                  >
                    <a
                      style={{
                        backgroundColor: this.state.disableNextButton
                          ? "transparent"
                          : "red",
                        visibility: this.state.disableNextButton
                          ? "hidden"
                          : "visible"
                      }}
                    >
                      Next
                    </a>
                  </li>
                </ul> */}
              </div>
              {/* <div style={{ flex: 1, display: "flex", flexDirection: "row" }}>
            <div>
              <ul className="pager" style={{ flex: 1 }}>
                <li
                  style={{
                    fontSize: "25px",
                    cursor: this.state.disablePreviousButton
                      ? "unset"
                      : "pointer"
                  }}
                  onClick={this.watchPreviousVideo}
                >
                  <a
                    style={{
                      backgroundColor: this.state.disablePreviousButton
                        ? "transparent"
                        : "red",
                      visibility: this.state.disablePreviousButton
                        ? "hidden"
                        : "visible"
                    }}
                  >
                    Previous
                  </a>
                </li>
              </ul>
            </div>

            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "row"
              }}
            >
              <Player
                playsInline
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                style={{ flex: 1 }}
              />
            </div>
            {/* <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <button
              type="button"
              className="btn btn-default btn-circle"
              style={{
                width: "80px",
                height: "80px",
                padding: "6px 0px",
                borderRadius: "40px",
                textAlign: "center",
                fontSize: "12px",
                lineHeight: "1.42857",
                backgroundColor: "red"
              }}
            >
              <span
                style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
              >
                Edit
              </span>
            </button>
          </div>
         

            <ul className="pager" style={{ flex: 1 }}>
              <li
                style={{
                  fontSize: "25px",
                  cursor: this.state.disableNextButton ? "unset" : "pointer"
                }}
                onClick={this.watchNextVideo}
              >
                <a
                  style={{
                    backgroundColor: this.state.disableNextButton
                      ? "transparent"
                      : "red",
                    visibility: this.state.disableNextButton
                      ? "hidden"
                      : "visible"
                  }}
                >
                  Next
                </a>
              </li>
            </ul>
          </div>
         */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UnitDialog;
