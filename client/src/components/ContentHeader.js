import React, { Component } from "react";

class ContentHeader extends Component {
  render() {
    return (
      <div
        className="contentHeader"
        style={{
          display: "flex",
          flex: 1,
          padding: 10,
          justifyContent: "center"
        }}
      />
    );
  }
}

export default ContentHeader;
