import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

class Unit extends Component {
  render() {
    return (
      <div style={{ flex: 1, height: "100%" }}>
        <Header />
        <Sidebar updateDialog={this.updateUnitDialog} unit />
        <div
          className="content-wrapper"
          style={{
            display: "flex",
            flex: 1
          }}
        >
          <section style={{ flex: 1, display: "flex" }}>
            <section
              className="content"
              style={{
                flex: 1,
                display: "flex",
                padding: 15
              }}
            >
              <div
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "row",
                    padding: 10
                  }}
                >
                  <div style={{ flex: 1, padding: 10 }}>
                    <div className="small-box bg-yellow" style={{ flex: 1 }}>
                      <div className="inner">
                        <h3>
                          <Link
                            to="/videoD"
                            style={{ color: "white" }}
                            onClick={this.forceUpdate}
                          >
                            Dialogue
                          </Link>
                        </h3>
                      </div>
                      <div className="icon">
                        <i className="ion-ios-people-outline" />
                      </div>
                      <a className="small-box-footer">
                        More info <i className="fa fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                  <div style={{ flex: 1, padding: 10 }}>
                    <div className="small-box bg-green" style={{ flex: 1 }}>
                      <div className="inner">
                        <h3>
                          <Link
                            to="/vocabulary"
                            style={{ color: "white" }}
                            onClick={this.forceUpdate}
                          >
                            Vocabulary
                          </Link>
                        </h3>
                      </div>
                      <div className="icon">
                        <i className="ion-ios-book" />
                      </div>
                      <a className="small-box-footer">
                        More info <i className="fa fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "row",
                    padding: 10
                  }}
                >
                  <div style={{ flex: 1, padding: 10 }}>
                    <div className="small-box bg-orange" style={{ flex: 1 }}>
                      <div className="inner">
                        <h3>
                          <Link
                            to="/pronunciation"
                            style={{ color: "white" }}
                            onClick={this.forceUpdate}
                          >
                            Pronunciation
                          </Link>
                        </h3>
                      </div>
                      <div className="icon">
                        <i className="ion ion-bag" />
                      </div>
                      <a className="small-box-footer">
                        More info <i className="fa fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                  <div style={{ flex: 1, padding: 10 }}>
                    <div className="small-box bg-aqua" style={{ flex: 1 }}>
                      <div className="inner">
                        <h3>
                          <Link
                            to="/grammar"
                            style={{ color: "white" }}
                            onClick={this.forceUpdate}
                          >
                            Grammar
                          </Link>
                        </h3>
                      </div>
                      <div className="icon">
                        <i className="ion ion-bag" />
                      </div>
                      <a className="small-box-footer">
                        More info <i className="fa fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "row",
                    padding: 10
                  }}
                >
                  <div style={{ flex: 1, padding: 10 }}>
                    <div className="small-box bg-red" style={{ flex: 1 }}>
                      <div className="inner">
                        <h3 style={{ whiteSpace: "normal" }}>
                          <Link
                            to="/reading"
                            style={{ color: "white" }}
                            onClick={this.forceUpdate}
                          >
                            Reading/Writing
                          </Link>
                        </h3>
                      </div>
                      <div className="icon">
                        <i className="ion-ios-book-outline" />
                      </div>
                      <a className="small-box-footer">
                        More info <i className="fa fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                  <div style={{ flex: 1, padding: 10 }}>
                    <div className="small-box bg-blue" style={{ flex: 1 }}>
                      <div className="inner">
                        <h3>
                          <Link
                            to="/culture"
                            style={{ color: "white" }}
                            onClick={this.forceUpdate}
                          >
                            Culture
                          </Link>
                        </h3>
                      </div>
                      <div className="icon">
                        <i className="ion-ios-book-outline" />
                      </div>
                      <a className="small-box-footer">
                        More info <i className="fa fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    );
  }
}

export default Unit;
