import React, { Component } from "react";
// import "../App.css";
// import { Link } from "react-router-dom";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      material: [
        {
          name: "ILOs",
          path: "ilos"
        },
        {
          name: "Pronunciation",
          path: "pronunciation"
        },
        {
          name: "Dialog",
          path: "videoD"
        },
        {
          name: "Grammmar",
          path: "grammar"
        },
        {
          name: "Vocabulary",
          path: "vocabulary"
        },
        {
          name: "Reading/Writing",
          path: "reading"
        },
        {
          name: "Evaluation",
          path: "evaluation"
        }
      ],
      // material: [],
      active: null,
      selectedDialog: "",
      key: "dialog"
    };
  }

  toggle = (position, item, key) => {
    this.props.updateDialog(item, position, key);
    if (this.state.active === position) {
      this.setState({ active: null });
    }
  };

  myColor = position => {
    if (this.state.active === position) {
      return "#00a65a";
    }
    return "";
  };

  render() {
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
              {"Unit 0"}
            </li>
            {/* <li className="treeview">
              <a href="#">
                <i className="fa fa-book" /> <span>Reading</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li className="active">
                  <a href="index.html">
                    <i className="fa fa-circle-o" /> Reading 1
                  </a>
                </li>
                <li>
                  <a href="index2.html">
                    <i className="fa fa-circle-o" /> Reading 2
                  </a>
                </li>
              </ul>
            </li> */}

            {/* <li className="treeview">
              <a href="#">
                <i className="fa fa-pencil" />
                <span>Writing</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li className="active">
                  <a href="index.html">
                    <i className="fa fa-circle-o" /> Writing 1
                  </a>
                </li>
                <li>
                  <a href="index2.html">
                    <i className="fa fa-circle-o" /> Practice 1
                  </a>
                </li>
              </ul>
            </li> */}

            {this.props.material
              ? this.props.material.map((item, index) => {
                  return (
                    <li
                      className={
                        index === 0
                          ? `treeview active`
                          : `treeview ${this.state.active}`
                      }
                      key={index}
                      style={{
                        background: this.myColor(index),
                        cursor: "pointer"
                      }}
                      onClick={() => {
                        this.toggle(index, item.name, "dialog");
                      }}
                    >
                      <a
                        style={{
                          color: "black",
                          background: this.myColor(index)
                        }}
                      >
                        <span>{item.name}</span>
                      </a>
                    </li>
                  );
                })
              : null}

            {this.props.practiceSet
              ? this.props.practiceSet.map((item, index) => {
                  return (
                    <li
                      className={`treeview ${this.state.active}`}
                      key={index}
                      style={{
                        background: this.myColor(index),
                        cursor: "pointer"
                      }}
                      onClick={() => {
                        this.toggle(index, item.name, "practice");
                      }}
                    >
                      <a
                        style={{
                          color: "black",
                          background: this.myColor(index)
                        }}
                      >
                        <span>{item.name}</span>
                      </a>
                    </li>
                  );
                })
              : null}
          </ul>
        </section>
        {/* {!this.props.unit && (
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
              <span
                style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
              >
                Add {this.props.unitSection}
              </span>
              <span
                style={{ color: "white", fontSize: 25, fontWeight: "bold" }}
              >
                +
              </span>
            </button>
          </Link>
        )} */}
        {/* {this.props.unit && (
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
                backgroundColor: "white",
                position: "absolute",
                bottom: 0,
                right: 0,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <span
                style={{ color: "black", fontSize: 15, fontWeight: "bold" }}
              >
                Add Practice
              </span>
              <span
                style={{ color: "black", fontSize: 25, fontWeight: "bold" }}
              >
                +
              </span>
            </button>
          </Link>
        )} */}
      </aside>
    );
  }
}

export default Sidebar;
