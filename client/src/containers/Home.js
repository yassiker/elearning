import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

// import cedar from "../assets/images/cedar2z - Copy.jpg";
import Background from "../assets/images/cedarBack.jpg";

const units = [
  {
    unit: "Unit 0",
    path: "unit0"
  },
  {
    unit: "Unit 1",
    path: "unit"
  },
  {
    unit: "Unit 2",
    path: "unit"
  },
  {
    unit: "Unit 3",
    path: "unit"
  },
  {
    unit: "Unit 4",
    path: "unit"
  },
  {
    unit: "Unit 5",
    path: "unit"
  },
  {
    unit: "Unit 6",
    path: "unit"
  },
  {
    unit: "Unit 7",
    path: "unit"
  },
  {
    unit: "Unit 8",
    path: "unit"
  },
  {
    unit: "Unit 9",
    path: "unit"
  },
  {
    unit: "Unit 10",
    path: "unit"
  }
];
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 0
    };
  }
  render() {
    let top = 10;
    return (
      <div style={{ flex: 1, display: "flex" }}>
        <section
          style={{
            flex: 1,
            display: "flex"
          }}
        >
          <div
            style={{
              flex: 1,
              height: "100%",
              display: "flex"
            }}
          >
            <div
              className="distribution-map"
              style={{
                flex: 1,

                display: "flex"
              }}
            >
              <div
                style={{
                  flex: 1,
                  backgroundImage: `url(${Background})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center"
                }}
              >
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    height: "100%",
                    zIndex: 1
                  }}
                >
                  {units.map((unit, index) => {
                    top = top + 7.5;

                    return (
                      <button
                        key={index}
                        className="map-point"
                        style={{
                          top: `${top}%`,
                          left: "48%",
                          opacity: 1
                        }}
                      >
                        <div className="content">
                          <div className="centered-y">
                            {/* <a style={{ color: "white", fontWeight: "bold" }}> */}
                            <h2>
                              <Link
                                to={`/${unit.path}`}
                                onClick={this.forceUpdate}
                              >
                                {unit.unit}
                              </Link>
                            </h2>
                            {/* </a> */}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div
                  className="verticalLine"
                  style={{
                    borderLeft: "22px solid white",
                    borderRight: "22px solid white",
                    height: "100%",
                    left: "45.9%",
                    position: "absolute",
                    top: "0px",
                    zIndex: 0
                  }}
                />

                <a
                  style={{
                    top: "68%",
                    left: "7.5%",
                    position: "absolute",
                    color: "darkorange",
                    cursor: "pointer",
                    zIndex: 1
                  }}
                >
                  <p style={{ fontSize: 23 }}>Grammar</p>
                </a>
                <a
                  style={{
                    left: "13%",
                    position: "absolute",
                    top: "60%",
                    color: "darkorange",
                    cursor: "pointer",
                    zIndex: 1
                  }}
                >
                  <p style={{ fontSize: 23 }}>Dictionary</p>
                </a>
                <a
                  style={{
                    left: "19%",
                    position: "absolute",
                    top: "42%",
                    color: "darkorange",
                    cursor: "pointer",
                    zIndex: 1
                  }}
                >
                  <p style={{ fontSize: 23 }}>Places</p>
                </a>
                <a
                  style={{
                    left: "28.5%",
                    position: "absolute",
                    top: "21%",
                    color: "darkorange",
                    cursor: "pointer",
                    zIndex: 1
                  }}
                >
                  <p style={{ fontSize: 23 }}>People</p>
                </a>
                <a
                  style={{
                    left: "65.5%",
                    position: "absolute",
                    top: "70%",
                    color: "darkorange",
                    cursor: "pointer",
                    zIndex: 1
                  }}
                >
                  <p style={{ fontSize: 23 }}>Documentries</p>
                </a>
                <a
                  style={{
                    left: "59.5%",
                    position: "absolute",
                    top: "58%",
                    color: "darkorange",
                    cursor: "pointer",
                    zIndex: 1
                  }}
                >
                  <p
                    onClick={() => console.log("Interviews")}
                    style={{ fontSize: 23 }}
                  >
                    Interviews and Dialogs
                  </p>
                </a>
                <a
                  style={{
                    left: "58.5%",
                    position: "absolute",
                    top: "39%",
                    color: "darkorange",
                    cursor: "pointer",
                    zIndex: 1
                  }}
                >
                  <p style={{ fontSize: 23 }}>Music and Poetry</p>
                </a>
                <a
                  style={{
                    left: "54.5%",
                    position: "absolute",
                    top: "21%",
                    color: "darkorange",
                    cursor: "pointer",
                    zIndex: 1
                  }}
                >
                  <p style={{ fontSize: 21 }}>Stories</p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
