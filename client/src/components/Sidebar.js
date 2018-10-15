import React, { Component } from "react";
// import "../App.css";
import { Link } from "react-router-dom";

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
          name: "Reading/Writing",
          path: "reading"
        },
        {
          name: "Evaluation",
          path: "evaluation"
        }
      ],
      // material: [],
      active: null
    };
  }

  toggle = position => {
    if (this.state.active === position) {
      this.setState({ active: null });
    } else {
      this.setState({ active: position });
    }
  };

  myColor = position => {
    if (this.state.active === position) {
      return "#00a65a";
    }
    return "";
  };

  render() {
    console.log(JSON.stringify(this.props.unit));
    const { material } = this.state;

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
              {this.props.unit}
            </li>

            {material.map((item, index) => {
              return (
                <li
                  className={`treeview ${this.state.active}`}
                  key={index}
                  style={{ background: this.myColor(index) }}
                  onClick={() => {
                    this.toggle(index);
                  }}
                >
                  <Link to={`/${item.path}`} onClick={this.forceUpdate}>
                    <i className="fa fa-book" aria-hidden="true" />
                    <span>{item.name}</span>
                  </Link>
                  {/* <Link to={`/reading/${item}`}>{item}</Link> */}
                </li>
              );
            })}
          </ul>
        </section>
      </aside>
    );
  }
}

export default Sidebar;
