import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

import "./Home.css";

import Background from "../../assets/images/cedarBack.jpg";
import { units } from "./homeConstants";
import homeStyles from "./homeStyle";
import { connect } from "react-redux";
import { selectUserRole } from "../../store/User/selectors";

type Props = {
  userRole: string
};
class Home extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      top: 0,
      message: ""
    };
  }

  componentDidMount() {
    // this.getDataFromDb();
  }

  getDataFromDb = () => {
    fetch("/api/entities")
      .then(response => response.json())
      .then(json => this.setState({ message: json }));
  };

  render() {
    let bottom = 0;
    console.log("this.props:" + JSON.stringify(this.props));
    return (
      <div style={homeStyles.container}>
        <Header noHeader />
        <Sidebar updateDialog={this.updateUnitDialog} />
        <div className="content-wrapper" style={homeStyles.contentWrapper}>
          <div style={homeStyles.contentWrapper}>
            <section style={homeStyles.contentWrapper}>
              <div
                style={{
                  flex: 1,
                  height: "100%",
                  display: "flex"
                }}
              >
                <div className="distribution-map" style={homeStyles.contentWrapper}>
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
                        bottom = bottom + 7.5;
                        return (
                          <button
                            key={index}
                            className="map-point"
                            style={{
                              bottom: `${bottom}%`,
                              left: "47.6%",
                              opacity: 1
                            }}
                          >
                            <div
                              className="content"
                              style={{
                                display: "flex",
                                justifyContent: "center"
                              }}
                            >
                              <div className="centered-y">
                                <h2
                                  style={{
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontWeight: "bold"
                                  }}
                                >
                                  <Link to={`/${unit.path}`} onClick={this.forceUpdate}>
                                    {unit.unit}
                                  </Link>
                                </h2>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <div className="verticalLine" style={homeStyles.unitContainer} />
                    <a style={homeStyles.unit}>
                      <p style={{ fontSize: 23 }}>Grammar</p>
                    </a>
                    <Link
                      to={`/lexicon/all`}
                      onClick={this.forceUpdate}
                      style={{
                        left: "13%",
                        position: "absolute",
                        top: "60%",
                        color: "darkorange",
                        cursor: "pointer",
                        zIndex: 1,
                        fontSize: 23
                      }}
                    >
                      Dictionary
                    </Link>

                    <Link
                      to={`/toponym`}
                      onClick={this.forceUpdate}
                      style={{
                        left: "19%",
                        position: "absolute",
                        top: "42%",
                        color: "darkorange",
                        cursor: "pointer",
                        zIndex: 1,
                        fontSize: 23
                      }}
                    >
                      Places
                    </Link>

                    <Link
                      to={`/anthroponym`}
                      onClick={this.forceUpdate}
                      style={{
                        left: "27%",
                        position: "absolute",
                        top: "21%",
                        color: "darkorange",
                        cursor: "pointer",
                        zIndex: 1,
                        fontSize: 23
                      }}
                    >
                      People
                    </Link>
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
                      <p style={{ fontSize: 23 }}>Documentaries</p>
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
                      <p onClick={() => console.log("Interviews")} style={{ fontSize: 23 }}>
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
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {};
};

const mapStateToProps = state => {
  return {
    userRole: selectUserRole()(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
