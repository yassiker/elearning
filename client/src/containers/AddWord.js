import React, { Component } from "react";

import cedarLogo from "../assets/images/cedfin.png";

import { Link } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

class AddWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "Word"
    };
  }

  componentDidMount() {
    if (this.props.match.params.id === "null") {
      this.setState({
        word: ""
      });
    } else {
      this.setState({
        word: this.props.match.params.id
      });
    }
  }

  handleChange = event => {
    this.setState({ word: event.target.value });
  };

  handleSubmit = event => {
    console.log("A name was submitted: " + this.state.word);
    event.preventDefault();
  };

  render() {
    return (
      <div style={{ flex: 1, height: "100%" }}>
        <Header />
        <Sidebar updateDialog={this.updateUnitDialog} />
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
                <h3 style={{ margin: 0 }}>
                  {this.props.match.params.id === "null" ? "Add" : "Edit"}
                </h3>
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "flex-end",
                  marginRight: 10
                }}
              >
                <button className="btn btn-success">Text Here</button>
              </div>
            </div>

            <div
              style={{
                flex: 7,
                display: "flex",
                overflow: "scroll",
                margin: 10
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
                    padding: "10px"
                  }}
                >
                  <div className="box-header with-border">
                    <h3
                      className="box-title"
                      style={{
                        color: "red",
                        fontSize: "28px",
                        fontWeight: "bold"
                      }}
                    >
                      {this.state.word}
                    </h3>
                  </div>
                  <div className="box-body" style={{ width: "50%" }}>
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <label className="text-aqua">Name in Tifinagh</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Name Here ..."
                          value={this.state.word}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="text-aqua">Grammar</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Grammar ..."
                        />
                      </div>
                      <div className="form-group">
                        <label className="text-aqua">Definition</label>
                        <textarea
                          className="form-control"
                          rows="3"
                          placeholder="Type Definition Here ..."
                        />
                      </div>
                      <div className="form-group">
                        <label className="text-aqua">Select Media</label>
                        <input type="file" id="exampleInputFile" />
                      </div>
                      {/* <input type="submit" value="Submit Changes" /> */}
                      <div
                        className="form-group"
                        style={{
                          flex: 1,
                          display: "flex",
                          justifyContent: "center"
                        }}
                      >
                        <button
                          type="submit"
                          className="btn btn-primary"
                          style={{ fontSize: "20px", fontWeight: "bold" }}
                        >
                          <Link to="/lexicon" onClick={this.forceUpdate}>
                            Save Changes
                          </Link>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="box-footer" style={{ width: "50%" }}>
                    <button
                      type="button"
                      className="btn btn-warning"
                      data-toggle="collapse"
                      data-target="#demo"
                      style={{ fontSize: "20px", fontWeight: "bold" }}
                    >
                      More Info
                    </button>
                    <div>
                      <div id="demo" className="collapse">
                        <div className="form-group">
                          <label className="text-aqua">Name in Arabic</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Name Here ..."
                          />
                        </div>
                        <div className="form-group">
                          <label className="text-aqua">Name in English</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Name Here ..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box-footer" style={{ width: "50%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddWord;
