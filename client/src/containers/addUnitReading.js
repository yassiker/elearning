import React, { Component } from "react";

import { Link } from "react-router-dom";

class ReadingAddition extends Component {
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
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: 20,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div className="col-md-12">
          <div
            className="box box-info"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              flex: "1",
              border: "15px solid #d2d6de",
              borderRadius: "20px",
              borderTopColor: "red"
            }}
          >
            <div className="box-header with-border" style={{ padding: 30 }}>
              <h3
                className="box-title"
                style={{ color: "red", fontSize: 28, fontWeight: "bold" }}
              >
                Add Reading
              </h3>
            </div>
            <div className="box-body" style={{ width: "80%" }}>
              <form style={{ padding: 30 }}>
                <div className="form-group">
                  <label
                    style={{
                      color: "#00a65a",
                      fontSize: 20,
                      fontWeight: "bold"
                    }}
                  >
                    Reading Title
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
                    // className="text-aqua"
                    style={{
                      color: "#00a65a",
                      fontSize: 20,
                      fontWeight: "bold"
                    }}
                  >
                    Content
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
                    // className="text-aqua"
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
            </div>
            <div className="box-footer" style={{ padding: 30 }}>
              <Link to="/reading" onClick={this.forceUpdate}>
                <button
                  type="submit"
                  className="btn btn-primary"
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
    );
  }
}

export default ReadingAddition;
