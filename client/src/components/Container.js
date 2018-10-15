import React, { Component } from "react";
import PageContent from "./PageContent";
// import BasicExample from "./BasicExample";

import cedarLogo from "../assets/images/cedfin.png";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  viewAll = () => {
    console.log("View All");
  };

  render() {
    return (
      <div className="content-wrapper">
        <section
          className="content-header"
          style={{
            borderBottom: "0px solid black",
            height: "57px",
            boxShadow: "0px 0px 10px #00a65a"
          }}
        >
          <a>
            <img
              src={cedarLogo}
              style={{ position: "absolute", top: "-22px", left: "-30px" }}
              alt=""
            />
          </a>
          <h1 style={{ position: "absolute", left: "44%", color: "#00a65a" }}>
            Unit 0
          </h1>
          <button className="btn btn-success pull-right" onClick={this.viewAll}>
            View All
          </button>
        </section>
        <PageContent />
      </div>
    );
  }
}

export default Container;
