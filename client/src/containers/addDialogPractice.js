import React, { Component } from "react";

import { Link } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

class PracticeAddition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleTitle: "",
      articleContent: "",
      fileName: ""
    };
  }

  addContentToDB = () => {
    console.log("addContent");
    console.log(this.state.fileName);
  };

  render() {
    return (
      <div style={{ flex: 1, height: "100%" }}>
        <Header />
        <Sidebar
          updateDialog={this.updateUnitDialog}
          screenTitle={"Add Dialogue Practice"}
        />
        <div
          className="content-wrapper"
          style={{
            display: "flex",
            flex: 1
          }}
        >
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <div
              style={{
                flex: 7,
                display: "flex",
                overflow: "scroll",
                margin: 10,
                padding: 10
              }}
            >
              <div
                className="box box-info"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: "1",
                  borderRadius: "20px"
                }}
              >
                <div
                  className="box-body"
                  style={{ flex: 1, display: "flex", flexDirection: "column" }}
                >
                  <form style={{ flex: 1 }}>
                    <div className="form-group">
                      <label
                        style={{
                          color: "#00a65a",
                          fontSize: 20,
                          fontWeight: "bold"
                        }}
                      >
                        Practice Title
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Name Here ..."
                        value={this.state.articleTitle}
                        onChange={event => {
                          this.setState({
                            articleTitle: event.target.value
                          });
                        }}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        style={{
                          color: "#00a65a",
                          fontSize: 20,
                          fontWeight: "bold"
                        }}
                      >
                        Practice Description
                      </label>
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Type Text Here ..."
                        value={this.state.articleContent}
                        onChange={event => {
                          this.setState({
                            articleContent: event.target.value
                          });
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        style={{
                          color: "#00a65a",
                          fontSize: 20,
                          fontWeight: "bold"
                        }}
                      >
                        Select Content
                      </label>
                      <input
                        type="file"
                        id="exampleInputFile"
                        value={this.state.fileName}
                        onChange={event => {
                          this.setState({
                            fileName: event.target.value
                          });
                        }}
                      />
                    </div>
                  </form>
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                      marginBottom: 10
                    }}
                  >
                    <Link to="/videoD" onClick={this.forceUpdate}>
                      <button
                        type="submit"
                        className="btn btn-danger"
                        style={{ fontSize: 20, fontWeight: "bold" }}
                        onClick={this.addContentToDB}
                      >
                        <a style={{ color: "white" }}>Save Changes</a>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PracticeAddition;
