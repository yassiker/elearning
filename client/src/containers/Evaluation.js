import React, { Component } from "react";

// import MapComponent from "../components/MapComponent";
import cedarLogo from "../assets/images/cedfin.png";

// import { Link } from "react-router-dom";

class Evaluation extends Component {
  render() {
    return (
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
            <h3 style={{ margin: 0 }}>Evaluation</h3>
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
    );
  }
}

export default Evaluation;
