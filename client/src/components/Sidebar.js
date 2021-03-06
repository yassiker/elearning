import React, { Component } from "react";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unitSections: [
        {
          sectionName: "Pronunciation"
        },
        {
          sectionName: "Grammar"
        },
        {
          sectionName: "Reading"
        },
        {
          sectionName: "Writing"
        },
        {
          sectionName: "Vocabulary"
        },
        {
          sectionName: "Culture"
        }
      ],
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
      active: null,
      selectedDialog: "",
      key: "dialog"
    };
  }

  toggle = (position, item, key) => {
    // this.props.updateDialog(item, position, key);
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
            {this.props.login && (
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
                  margin: 0,
                  alignItems: "center"
                }}
              >
                {"Unit number"}
              </li>
            )}

            {this.props.login &&
              this.state.unitSections.map((item, index) => {
                return (
                  <li
                    className={index === 0 ? `treeview active` : `treeview ${this.state.active}`}
                    key={index}
                    style={{
                      background: this.myColor(index),
                      cursor: "pointer"
                    }}
                    onClick={() => {
                      this.toggle(index, item.sectionName, "dialog");
                    }}
                  >
                    <a
                      style={{
                        color: "black",
                        background: this.myColor(index)
                      }}
                    >
                      <span>{item.sectionName}</span>
                    </a>
                  </li>
                );
              })}

            {/* {this.props.practiceSet
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
              : null} */}
          </ul>
        </section>
      </aside>
    );
  }
}

export default Sidebar;
