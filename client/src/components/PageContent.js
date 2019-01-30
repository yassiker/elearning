import React, { Component } from "react";

import LetterComponent from "./LetterComponent";

class PageContent extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <LetterComponent />
      </div>
    );
  }
}

export default PageContent;
