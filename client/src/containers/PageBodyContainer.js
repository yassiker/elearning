import React, { Component } from "react";

import Unit0 from "./Unit0";

import Background from "../assets/images/boxed-bg.jpg";

class PageBodyContainer extends Component {
  render() {
    return (
      <div
        className="pageBody"
        style={{
          display: "flex",
          flex: 11,
          backgroundImage: `url(${Background})`,
          flexDirection: "row"
        }}
      >
        <Unit0 />
      </div>
    );
  }
}

export default PageBodyContainer;
