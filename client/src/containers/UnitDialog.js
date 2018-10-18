import React, { Component } from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import cedarLogo from "../assets/images/cedfin.png";
import { Link } from "react-router-dom";

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
      ]
    };
  }

  watchNextVideo = () => {
    console.log("watchNextVideo" + this.state.position);
    if (this.state.position < this.state.unitVideos.length - 1) {
      this.setState({
        position: this.state.position + 1,
        disablePreviousButton: false
      });
    } else {
      console.log("hellooo");
      this.setState({
        disableNextButton: true
      });
    }

    // console.log(this.state.position);
    // if (this.state.position > this.state.unitVideos.length - 1) {
    //   this.setState({
    //     disableNextButton: false
    //   });
    // } else {
    //   this.setState({
    //     disablePreviousButton: true,
    //     position: this.state.position + 1
    //   });
    // }
  };

  watchPreviousVideo = () => {
    console.log("watchPreviousVideo");
    if (this.state.position - 1 < 0) {
      this.setState({
        disablePreviousButton: true
      });
    } else {
      this.setState({
        disableNextButton: false,
        position: this.state.position - 1
      });
    }
  };

  render() {
    return (
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
            <h3 style={{ margin: 0 }}>
              {this.state.unitVideos[this.state.position].title}
            </h3>
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
            <ul className="pager" style={{ flex: 1 }}>
              <li
                style={{
                  fontSize: "25px",
                  cursor: this.state.disablePreviousButton ? "unset" : "pointer"
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
          <div style={{ flex: 3 }}>
            <Player
              playsInline
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              style={{ flex: 1 }}
            />
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
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
    );
  }
}

export default UnitDialog;
