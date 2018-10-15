import React, { Component } from "react";

import board from "../assets/images/Blackboard.png";

import LetterContainer from "../components/LetterContainer";

class BaseUnit extends Component {
  // Unit 0
  render() {
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          padding: 20,
          margin: 10
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex"
            // backgroundImage: `url(${board})`,
            // backgroundRepeat: "no-repeat",
            // backgroundSize: "auto"
          }}
        >
          <div
            style={{
              position: "absolute",
              display: "flex",
              flex: 1,
              zIndex: 1000
            }}
          >
            <LetterContainer />
          </div>
          <img style={{ width: "100%" }} src={board} alt="" />
          {/* <LetterContainer /> */}
        </div>
        {/* <div
          className="row"
          style={{
            backgroundImage: `url(${board})`,
            backgroundRepeat: "no-repeat",
            height: 600,
            backgroundSize: "cover"
          }}
        >
          <LetterContainer />
        </div> */}
      </div>
    );
  }
}

export default BaseUnit;
