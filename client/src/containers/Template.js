import React, { Component } from "react";
// import ContentHeader from "../components/ContentHeader";
import PageBodyContainer from "../containers/PageBodyContainer";

class Template extends Component {
  render() {
    return (
      <section className="" style={{ flex: 1, display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
          <PageBodyContainer />
        </div>
      </section>
    );
  }
}

export default Template;
