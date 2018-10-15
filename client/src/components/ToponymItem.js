import React, { Component } from "react";

import MapComponent from "../components/MapComponent";
import cedarLogo from "../assets/images/cedfin.png";
import ifrane from "../assets/images/ifrane.png";

import { Link } from "react-router-dom";

class ToponymItem extends Component {
  render() {
    return (
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div
          className="content-header"
          style={{
            borderBottom: "0px solid black",
            height: "57px",
            boxShadow: "0px 0px 10px #00a65a"
          }}
        >
          <a>
            <img
              src={cedarLogo}
              style={{ position: "absolute", top: "-22px", left: "-30px" }}
              alt=""
            />
          </a>

          <h1 style={{ position: "absolute", left: "44%", color: "#00a65a" }}>
            {this.props.match.params.id}
          </h1>

          {/* <h1 style="color: red;font-weight: bold;font-size: 50px;">ⵉⴼⵔⴰⵏ</h1> */}
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "row" }}>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              overflow: "scroll",
              padding: 10,
              boxShadow: "0px 0px 10px 5px #00a65a",
              margin: 10
            }}
          >
            {/* <h1 style={{ color: "red", fontWeight: "bold", fontSize: "50px" }}>
              {this.props.match.params.id}
            </h1> */}
            <div>
              <img src={ifrane} alt="" />
            </div>

            <div style={{ flex: 1, overflow: "scroll" }}>
              <p style={{ fontSize: 16, margin: 0 }}>
                Ifrane (Arabic: إفران‎; Berber: ⵉⴼⵔⴰⵏ) is a city in the Middle
                Atlas region of Morocco (population 73,782 in November 2014).[3]
                The capital of Ifrane Province in the region of Fès-Meknès,
                Ifrane is located at an elevation of 1,665 m (5,463 ft).[1] In
                Tamazight, the regional Berber language, "ifran" means caves.
                The modern town of Ifrane was established by the French
                administration in 1928 during the protectorate era for their
                administration due to its Alpine climate. Ifrane was conceived
                as a “hill station” or colonial type of settlement. It is a
                resort town set high up in the mountains so that Europeans can
                find relief from the summer heat of tropical colonies. Ifrane is
                also a popular altitude training destination
              </p>
            </div>

            <div>
              <button
                type="button"
                className="btn btn-primary pull-right"
                style={{
                  margin: 0,
                  backgroundColor: "blue",
                  borderColor: "blue"
                }}
              >
                <a
                  href="https://en.wikipedia.org/wiki/Ifrane"
                  target="_blank"
                  style={{ color: "white" }}
                  rel="noopener noreferrer"
                >
                  Link to Wikipidea
                </a>
              </button>
              <button
                type="button"
                className="btn btn-primary pull-right"
                style={{
                  margin: "0px",
                  marginRight: "10px",
                  marginBottom: "10px",
                  backgroundColor: "orange",
                  borderColor: "orange"
                }}
              >
                <Link to="/tamazight/addWord">
                  <a style={{ color: "white" }}>View on Lexicon</a>
                </Link>
              </button>
            </div>
          </div>
          <div
            id="map"
            style={{
              flex: 1,
              display: "flex",
              margin: 10
            }}
          >
            <MapComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default ToponymItem;
