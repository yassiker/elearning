import React, { Component } from "react";

// import MapComponent from "../components/MapComponent";
import cedarLogo from "../assets/images/cedfin.png";

// import { Link } from "react-router-dom";

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
  render() {
    return (
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
            <h3 style={{ margin: 0 }}>Grammar</h3>
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
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Tifinagh Pronoun</th>
                <th scope="col">Localized</th>
                {/* <th scope="col">Prefix</th> */}
                <th scope="col">Verb Form</th>
                {/* <th scope="col">Suffix</th> */}
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
                    {/* <td style={{ padding: 6 }}>the Bird</td> */}
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
                      <i className="fa fa-volume-up" style={{ color: "red" }} />
                    </td>
                    {/* <td style={{ padding: 6 }}>Suffix</td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Grammar;
