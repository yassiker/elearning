import React, { Component } from "react";

import { Link } from "react-router-dom";

class UnitContainer extends Component {
  render() {
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          padding: 20,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        Unit Content
      </div>
    );
  }
}

export default UnitContainer;
