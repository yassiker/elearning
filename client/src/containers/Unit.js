import React, { Component } from "react";
import { Link } from "react-router-dom";
// import styles from "./style.css";

class Unit extends Component {
  render() {
    return (
      <section style={{ flex: 1, display: "flex" }}>
        <section
          className="content"
          style={{
            flex: 1,
            display: "flex",
            padding: 15
          }}
        >
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
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
                      <Link to="/UnitDialog" style={{ color: "white" }}>
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
                      <Link to="/Lexicon" style={{ color: "white" }}>
                        Lexicon
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
                      <Link to="/Template" style={{ color: "white" }}>
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
                      <Link to="/Template" style={{ color: "white" }}>
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
                      <Link to="/ReadingContainer" style={{ color: "white" }}>
                        Writing
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
                      <Link to="/CultureContainer" style={{ color: "white" }}>
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
    );
  }
}

export default Unit;
