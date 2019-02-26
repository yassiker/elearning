import React, { Component } from "react";

import cedarLogo from "../assets/images/cedfin.png";
import Header from "../components/Header";
import { Radio } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const material = [
  {
    name: "Lesson 1",
    videoSource: require("../assets/videos/dialog1.mp4")
  },
  {
    name: "Lesson 2",
    videoSource: require("../assets/videos/dialog2.mp4")
  }
];

const pronouns = [
  {
    tfinaghP: "ⵏⴽⴽ",
    localeP: "I",
    prefix: "",
    suffix: ""
  },
  {
    tfinaghP: "ⵛⴳⴳ",
    localeP: "YOU",
    prefix: "",
    suffix: ""
  },
  {
    tfinaghP: "ⵏⵜⵜⴰ",
    localeP: "HE",
    prefix: "",
    suffix: ""
  },
  {
    tfinaghP: "ⵏⵜⵜⴰⵜ",
    localeP: "SHE",
    prefix: "",
    suffix: ""
  },
  {
    tfinaghP: "ⵏⴽⵏⵉ",
    localeP: "WE",
    prefix: "",
    suffix: ""
  },
  {
    tfinaghP: "ⴽⵏⵏⵉ",
    localeP: "YOU(m)",
    prefix: "",
    suffix: ""
  },
  {
    tfinaghP: "ⴽⵏⵏⵉⵏⵜⵉ",
    localeP: "YOU(f)",
    prefix: "",
    suffix: ""
  },
  {
    tfinaghP: "ⵏⵉⵜⵏⵉ",
    localeP: "THEY(m)",
    prefix: "",
    suffix: ""
  },
  {
    tfinaghP: "ⵏⵉⵜⵏⵜⵉ",
    localeP: "THEY(f)",
    prefix: "",
    suffix: ""
  }
];

class Grammar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      disablePreviousButton: true,
      disableNextButton: false,
      showVideoList: false,
      section: 0,
      selectedVideo: material[0].name,
      videoSource: material[0].videoSource,
      key: "dialog"
    };
  }

  renderReading = () => {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <ul className="sidebar-menu">
            <li
              className="header"
              style={{
                height: 57,
                backgroundColor: "white",
                fontSize: 20,
                color: "#00a65a",
                display: "flex",
                justifyContent: "center",
                borderLeft: "3px solid red",
                borderRight: "3px solid #00a65a",
                margin: 0
              }}
            >
              {"Unit"}
            </li>
            <li className="treeview">
              <a
                onClick={() =>
                  this.setState({
                    section: 0
                  })
                }
              >
                <i className="fa fa-book" /> <span>Lessons</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li className="">
                  <a
                    onClick={() =>
                      this.setState({
                        videoSource: material[0].videoSource,
                        selectedVideo: material[0].name
                      })
                    }
                  >
                    {" "}
                    <Radio name="radioGroup">Lesson 1</Radio>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      this.setState({
                        videoSource: material[1].videoSource,
                        selectedVideo: material[1].name
                      })
                    }
                  >
                    <Radio name="radioGroup">Lesson 2</Radio>
                  </a>
                </li>
              </ul>
            </li>

            <li className="treeview">
              <a
                onClick={() =>
                  this.setState({
                    section: 1
                  })
                }
              >
                <i className="fa fa-check" />
                <span>Practice</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li className="active">
                  <a>
                    <i className="fa fa-circle-o" /> Practice 1
                  </a>
                </li>
                <li>
                  <a>
                    <i className="fa fa-circle-o" /> Practice 1
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <Link to="/addDialog" onClick={this.forceUpdate}>
          <button
            type="button"
            className="btn btn-default btn-circle"
            style={{
              flex: 1,
              display: "flex",
              width: "100px",
              height: "100px",
              padding: "6px 0px",
              borderRadius: "50px",
              textAlign: "center",
              fontSize: "12px",
              lineHeight: "1.42857",
              backgroundColor: "black",
              position: "absolute",
              bottom: 0,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <span style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
              Add Lesson
            </span>
            <span style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
              +
            </span>
          </button>
        </Link>

        <Link to="/addPractice" onClick={this.forceUpdate}>
          <button
            type="button"
            className="btn btn-default btn-circle"
            style={{
              flex: 1,
              display: "flex",
              width: "100px",
              height: "100px",
              padding: "6px 0px",
              borderRadius: "50px",
              textAlign: "center",
              fontSize: "12px",
              lineHeight: "1.42857",
              backgroundColor: "white",
              position: "absolute",
              bottom: 0,
              right: 0,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <span style={{ color: "black", fontSize: 15, fontWeight: "bold" }}>
              Add Practice
            </span>
            <span style={{ color: "black", fontSize: 25, fontWeight: "bold" }}>
              +
            </span>
          </button>
        </Link>
      </aside>
    );
  };

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    };

    return (
      <div style={{ flex: 1, height: "100%" }}>
        <Header />
        {this.renderReading()}
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
                  {this.state.section === 0
                    ? this.state.selectedVideo
                    : "Practice"}
                </h3>
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "flex-end"
                }}
              >
                <button className="btn btn-success">Text Here</button>
              </div>
            </div>

            <div
              style={{
                flex: 7,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 20
              }}
            >
              {this.state.section === 0 ? (
                <table className="table table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Tifinagh Pronoun</th>
                      <th scope="col">Localized</th>
                      <th scope="col">Verb Form</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pronouns.map((item, index) => {
                      return (
                        <tr style={{ fontSize: 18 }} key={index}>
                          <th
                            scope="row"
                            style={{
                              padding: 6,
                              display: "flex",
                              flex: 1,
                              justifyContent: "space-between",
                              alignItems: "center"
                            }}
                          >
                            {item.tfinaghP}
                            <i
                              className="fa fa-volume-up"
                              style={{ color: "orange" }}
                            />
                          </th>
                          <td style={{ padding: 6 }}>{item.localeP}</td>

                          <td
                            style={{
                              padding: 6,
                              display: "flex",
                              flex: 1,
                              justifyContent: "space-between",
                              alignItems: "center"
                            }}
                          >
                            @twitter{" "}
                            <i
                              className="fa fa-volume-up"
                              style={{ color: "red" }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <div className="container" style={{ flex: 1 }}>
                  <Slider {...settings}>
                    <div>
                      <h3>Practice 1</h3>
                    </div>
                    <div>
                      <h3>Practice 2</h3>
                    </div>
                    <div>
                      <h3>Practice 3</h3>
                    </div>
                    <div>
                      <h3>Practice 4</h3>
                    </div>
                    <div>
                      <h3>Practice 5</h3>
                    </div>
                    <div>
                      <h3>Practice 6</h3>
                    </div>
                  </Slider>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Grammar;
