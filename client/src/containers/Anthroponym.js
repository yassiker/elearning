import React, { Component } from "react";

import MapComponent from "../components/MapComponent";
// import cedarLogo from "../assets/images/cedfin.png";

import { Link } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import { tribeNames, peopleNames, animalNames } from "./constants";

class Anthroponym extends Component {
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
    console.log("hmmmm: " + this.props.match.params.id);
    let filteredWords;
    if (this.props.match.params.id === "tribe") {
      filteredWords = tribeNames.wordList.filter(item => {
        return item.name.indexOf(this.state.search) !== -1;
      });
    } else if (this.props.match.params.id === "people") {
      filteredWords = peopleNames.wordList.filter(item => {
        return item.name.indexOf(this.state.search) !== -1;
      });
    } else if (this.props.match.params.id === "animal") {
      filteredWords = animalNames.wordList.filter(item => {
        return item.name.indexOf(this.state.search) !== -1;
      });
    }

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

              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "flex-end",
                  marginRight: 10
                }}
              >
                <button className="btn btn-success">
                  <Link to={`/tamazight/addWord/${null}`}>
                    Add new {this.props.match.params.id}
                  </Link>
                </button>
              </div>
            </div>

            <div style={{ flex: 7, display: "flex", flexDirection: "row" }}>
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
                <h3>{this.props.match.params.id}</h3>
                {filteredWords && filteredWords.length > 0 ? (
                  filteredWords.map((item, index) => {
                    return (
                      <Link
                        to={`/add/${item.name}`}
                        key={`${item}_${index}`}
                        style={{ width: "100%" }}
                      >
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
                                  style={{ fontSize: "25px" }}
                                >
                                  {item.name}
                                </h1>
                              </div>
                            </div>
                          </div>
                        </li>
                      </Link>
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
              {/* </div> */}
              <div
                id="map"
                style={{
                  flex: 3,
                  display: "flex",
                  margin: 15
                }}
              >
                {this.props.match.params.id === "tribe" ? (
                  <MapComponent />
                ) : (
                  this.props.match.params.id
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Anthroponym;
