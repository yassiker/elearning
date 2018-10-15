import React, { Component } from "react";
// import { url } from "inspector";
// import board from "../assets/images/board2.jpg";
// import LetterContainer from "./LetterContainer";
// import BaseUnit from "../containers/Unit0";
import LetterComponent from "./LetterComponent";

class PageContent extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        {/* <BaseUnit /> */}
        <LetterComponent />
      </div>
    );
  }
}

export default PageContent;
