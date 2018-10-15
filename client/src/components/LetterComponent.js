import React, { Component } from "react";

import LetterExmpleList from "./LetterExmpleList";

class LetterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        ["start1", "start2", "start3"],
        ["middle1", "middle2", "middle3"],
        ["end1", "end2", "end3"]
      ],
      letters: [
        ["ⴰ", "A"],
        ["ⵣ", "Z"],
        ["ⴻ", "E"],
        ["ⵔ", "R"],
        ["ⵜ", "T"],
        ["ⵢ", "Y"],
        ["ⵓ", "U"],
        ["ⵉ", "I"]
      ],
      letterPosition: 0
    };
  }

  incrementPosition = () => {
    this.setState({
      letterPosition: this.state.letterPosition + 1
    });
  };

  decrementPosition = () => {
    this.setState({
      letterPosition: this.state.letterPosition - 1
    });
  };

  render() {
    return (
      <div style={{ height: "100%" }}>
        <div style={{ height: "50%", marginBottom: "15px" }}>
          {this.state.letters[this.state.letterPosition - 1] && (
            <div
              className="col-sm-3"
              style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                fontSize: "75px"
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    cursor: "pointer"
                  }}
                  onClick={this.decrementPosition}
                >
                  {this.state.letters[this.state.letterPosition - 1][0]}
                </span>
                <a />
              </div>
            </div>
          )}

          <div className="col-sm-6">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <div
                style={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <span style={{ fontSize: "75px" }}>YAB</span>
              </div>
              <div
                style={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <span
                  style={{
                    fontSize: "75px",
                    color: "green",
                    fontWeight: "bold"
                  }}
                >
                  {this.state.letters[this.state.letterPosition][0]}
                </span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ width: "50%" }}>
                <span className="pull-left" style={{ fontSize: "75px" }}>
                  {this.state.letters[this.state.letterPosition][0]}
                </span>
              </div>
              <div style={{ width: "50%" }}>
                <span
                  className="pull-right glyphicon glyphicon-volume-up"
                  style={{ fontSize: "75px", cursor: "pointer" }}
                />
              </div>
            </div>
          </div>

          {this.state.letters[this.state.letterPosition + 1] && (
            <div
              className="col-sm-3"
              style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                fontSize: "75px"
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ display: "flex", justifyContent: "center" }}>
                  {this.state.letters[this.state.letterPosition + 1][0]}
                </span>
                <a>
                  <span
                    className="glyphicon glyphicon-arrow-right"
                    onClick={this.incrementPosition}
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </div>
            </div>
          )}
        </div>

        <LetterExmpleList data={this.state.data} />
      </div>
    );
  }
}

export default LetterComponent;
