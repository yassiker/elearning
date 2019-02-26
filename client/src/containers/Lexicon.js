import React, { Component } from "react";
import { LexiconConstants } from "./constants";
import MapComponent from "../components/MapComponent";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
class LexiconContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      displayMap: false,
      selectedWord: [
        "ⴰⴼⵔⵉ",
        "(n, m)",
        "Naturally occurring cavity formed underground",
        "Cave",
        "cave.jpg"
      ]
    };
  }

  updateSearch = event => {
    this.setState({
      search: event.target.value.substr(0, 20)
    });
  };

  render() {
    if (this.props.match.params.id === "all") {
      console.log(this.props.match.params.id);
    }
    let filteredWords = LexiconConstants.wordList.filter(item => {
      return item.name.indexOf(this.state.search) !== -1;
    });

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
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column"
            }}
          >
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
              {this.props.match.params.id === "all" ? (
                <div
                  style={{
                    flex: 1,
                    color: "#00a65a",
                    display: "flex"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      color: "green",
                      alignItems: "center",
                      marginLeft: 10,
                      borderBottom: "1px solid #4dd0e1",
                      boxShadow: "0 1px 0 0 #4dd0e1",
                      borderRadius: 25
                    }}
                  >
                    <i
                      className="fa fa-search"
                      aria-hidden="true"
                      style={{ fontSize: 25, color: "#4dd0e1" }}
                    />
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Type here"
                      aria-label="Search"
                      style={{
                        border: "none",
                        fontSize: 25,
                        fontWeight: "bold",
                        color: "red"
                      }}
                      value={this.state.search}
                      onChange={this.updateSearch}
                    />
                  </div>
                </div>
              ) : null}

              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "flex-end",
                  marginRight: 10
                }}
              >
                <button className="btn btn-success">
                  <Link to={`/tamazight/addWord/${null}`}>Add new Word</Link>
                </button>
              </div>
            </div>

            <div style={{ display: "flex", flex: 7 }}>
              {this.props.match.params.id === "all" ? (
                <ul
                  className="box box-info"
                  style={{
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    overflowY: "scroll",
                    listStyle: "none",
                    margin: 15,
                    alignItems: "center",
                    padding: 0
                  }}
                >
                  {" "}
                  <h2>WordList</h2>
                  {filteredWords.length > 0 ? (
                    filteredWords.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="list--list-item"
                          data-gender="Noun"
                          style={{ cursor: "pointer", width: "100%" }}
                        >
                          <div className="col-md-12 ">
                            <div className="box box-success collapsed-box">
                              <div className="box-header with-border">
                                <h1
                                  className="box-title name"
                                  style={{ fontSize: "35px" }}
                                >
                                  {item.name}
                                </h1>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <i
                        className="fa fa-exclamation-triangle"
                        style={{
                          color: "red",
                          display: "flex",
                          justifyContent: "center",
                          fontSize: 30
                        }}
                      />
                      <p
                        style={{
                          color: "red",
                          fontSize: 20,
                          fontWeight: "bold",
                          padding: 25,
                          paddingTop: 5
                        }}
                      >
                        Sorry, no resutls found. Type a new word or{" "}
                        <a style={{ color: "aqua", cursor: "pointer" }}>
                          click here
                        </a>{" "}
                        for suggestings
                      </p>
                    </div>
                  )}
                </ul>
              ) : null}

              <div
                style={{
                  flex: 3,
                  display: "flex",
                  boxSizing: "border-box",
                  border: "2px solid #00a65a",
                  borderRadius: "5px 5px",
                  boxShadow: "0px 0px 10px 5px #00a65a",
                  backgroundColor: "white",
                  margin: "15px",
                  direction: "ltr" // latin
                }}
              >
                <div
                  className="wordClass"
                  style={{
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    padding: 10
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "1px solid red",
                      paddingBottom: 15
                    }}
                  >
                    <div style={{ flex: 1, display: "flex" }}>
                      <i
                        style={{
                          color: "red",
                          fontSize: "60px",
                          cursor: "pointer",
                          padding: "top: 10px"
                        }}
                        className="fa fa-volume-up pull-right"
                      />
                    </div>

                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center"
                      }}
                    >
                      <h1
                        className=""
                        style={{
                          color: "#3a87ad",
                          fontSize: "50px",
                          margin: 0
                        }}
                      >
                        {this.state.selectedWord[0]}
                      </h1>
                    </div>

                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        whiteSpace: "normal",
                        color: "#3a87ad",
                        fontSize: "40px",
                        lineHeight: "90%",
                        justifyContent: "flex-end"
                      }}
                    >
                      {this.state.selectedWord[1]}
                    </div>
                  </div>
                  <div style={{ height: "70%" }}>
                    <span
                      className="mainElements"
                      style={{
                        color: "orange",
                        fontSize: 18,
                        fontWeight: "bold"
                      }}
                    >
                      Definition
                    </span>
                    <p>{this.state.selectedWord[2]}</p>
                    <div>
                      <span
                        className="mainElements"
                        style={{
                          color: "orange",
                          fontSize: 18,
                          fontWeight: "bold"
                        }}
                      >
                        Examples
                      </span>
                      <ol>
                        <li>First Example</li>
                        <li>Second Example</li>
                        <li>Third Example</li>
                      </ol>
                    </div>
                    <div>
                      <span
                        className="mainElements"
                        style={{
                          color: "orange",
                          fontSize: 18,
                          fontWeight: "bold"
                        }}
                      >
                        Pictures
                      </span>
                      <div className="imageContainer">
                        <img
                          src={require(`../assets/images/${
                            this.state.selectedWord[4]
                          }`)}
                          alt="Girl in a jacket"
                          width="150"
                          height="150"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      height: "20%",
                      width: "100%",
                      justifyContent: "flex-end",
                      alignItems: "flex-end"
                    }}
                  >
                    <button
                      type="button"
                      className="btn btn-default bg-orange pull-right"
                      data-toggle="modal"
                      data-target="#modal-default"
                      style={{ margin: "10px" }}
                    >
                      <a style={{ color: "white" }}>Regional Variants</a>
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary pull-right"
                      style={{ margin: "10px" }}
                    >
                      <Link
                        to={`/tamazight/addWord/${this.state.selectedWord[0]}`}
                      >
                        Edit Word
                      </Link>
                    </button>
                  </div>
                </div>
              </div>

              <div
                className="modal fade"
                id="modal-default"
                style={{ height: "100%" }}
              >
                <div className="modal-dialog" style={{ height: "100%" }}>
                  <div
                    className="modal-content"
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      height: "100%"
                    }}
                  >
                    <div className="modal-header">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                      <h4 className="modal-title">
                        Location and other details
                      </h4>
                    </div>
                    <div
                      className="modal-body"
                      style={{
                        width: "95%",
                        height: "80%"
                      }}
                    >
                      <MapComponent />
                    </div>
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

export default LexiconContainer;
