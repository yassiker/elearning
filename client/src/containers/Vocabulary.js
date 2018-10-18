import React, { Component } from "react";

// import MapComponent from "../components/MapComponent";
import cedarLogo from "../assets/images/cedfin.png";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";
//import { Link } from "react-router-dom";

const words = [
  {
    tifinagh: "ⵜⴰⵢⵍⴰⵍⵜ",
    arabic: "طائرة",
    latin: "Plane",
    sound: require("../assets/sounds/plane.wav")
  },
  {
    tifinagh: "ⴰⵍⴰⵡⴰⵢ",
    arabic: "قطار",
    latin: "Train",
    sound: require("../assets/sounds/train.wav")
  },
  {
    tifinagh: "ⵜⴰⵅⵉⵣⵣⵓⵜ",
    arabic: "جزرة",
    latin: "Carrot",
    sound: require("../assets/sounds/carrot.wav")
  },
  {
    tifinagh: "ⵜⴰⴷⴼⴼⵓⵢⵜ",
    arabic: "تفاح",
    latin: "Apple",
    sound: require("../assets/sounds/apple.wav")
  }
];

class Vocabulary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedWord: ""
    };
  }
  render() {
    const popover = (
      <Popover
        style={{ backgroundColor: "skyblue" }}
        id="popover-positioned-left"
        title={
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 25,
              fontWeight: "bold"
            }}
          >
            <strong>{this.state.selectedWord}</strong>
          </div>
        }
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div style={{ flex: 1, padding: 10 }}>
            <strong>Meaning</strong> Grammaar
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "space-around",
              padding: 10
            }}
          >
            <i className="fa fa-edit" style={{ color: "red", fontSize: 25 }} />
            <i
              className="fa fa-book"
              style={{ color: "rebeccapurple", fontSize: 25 }}
            />
          </div>
        </div>
      </Popover>
    );
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
            <h3 style={{ margin: 0 }}>Vocabulary</h3>
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

        <div style={{ flex: 7, display: "flex", margin: 20 }}>
          {/* <table className="table table-striped table-dark">
            <thead className="thead-dark">
              <tr>
                <th scope="col" style={{ width: "20%" }}>
                  Tifinagh
                </th>
                <th scope="col" style={{ width: "20%" }}>
                  Arabic
                </th>
                <th scope="col" style={{ width: "20%" }}>
                  Latin
                </th>
                <th scope="col">Sound</th>
              </tr>
            </thead>
            <tbody>
              {wordVocabs.map((item, index) => {
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
                      {item.tifinagh}
                    </th>
                    <td style={{ padding: 6 }}>{item.arabic}</td>
                    <td
                      style={{
                        padding: 6,
                        display: "flex",
                        flex: 1,
                        justifyContent: "space-between",
                        alignItems: "center"
                      }}
                    >
                      {item.latin}
                    </td>
                    <td style={{ padding: 6 }}>
                      <audio controls style={{ width: "80%" }}>
                        <source src={item.sound} type="audio/ogg" />
                        <source src={item.sound} type="audio/mpeg" />
                      </audio>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        */}

          <div
            style={{
              flex: 7,
              display: "flex",
              overflow: "scroll",
              justifyContent: "center"
            }}
          >
            <table
              id="newexample"
              className="table table-striped table-bordered"
              style={{ width: "100%", flex: 1 }}
            >
              <thead>
                <tr>
                  <th>Tamazight</th>
                  <th>Arabic</th>
                  <th>Latin</th>
                  <th>Sound</th>
                  {/* <th>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        Letter Position
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between"
                        }}
                      >
                        <div style={{ color: "brown" }}>A.....</div>
                        <div style={{ color: "red" }}>...A...</div>
                        <div style={{ color: "orange" }}>.....A</div>
                      </div>
                    </div>
                  </th> */}
                </tr>
              </thead>
              <tbody>
                {words.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <OverlayTrigger
                          trigger="click"
                          placement="left"
                          overlay={popover}
                          rootClose
                        >
                          <Button
                            bsStyle="link"
                            onClick={() =>
                              this.setState({
                                selectedWord: item.tifinagh
                              })
                            }
                          >
                            {item.tifinagh}
                          </Button>
                        </OverlayTrigger>
                      </td>
                      <td>{item.arabic}</td>
                      <td>{item.latin}</td>
                      <td>
                        <audio controls style={{ width: "80%" }}>
                          <source src={item.sound} type="audio/ogg" />
                          <source src={item.sound} type="audio/mpeg" />
                        </audio>
                      </td>
                      {/* <td>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between"
                          }}
                        >
                          {item.words.map((myword, myindex) => {
                            return (
                              <div key={myindex}>
                                <div
                                  style={{
                                    flex: 1
                                  }}
                                >
                                  <div
                                    data-toggle="collapse"
                                    data-target="#demo"
                                  >
                                    <OverlayTrigger
                                      trigger="click"
                                      placement="top"
                                      overlay={popover}
                                      rootClose
                                    >
                                      <Button
                                        bsStyle="link"
                                        onClick={() =>
                                          this.setState({
                                            selectedWord: myword[0]
                                          })
                                        }
                                      >
                                        {myword[0]}
                                      </Button>
                                    </OverlayTrigger>
                                  </div>
                                </div>
                                <div
                                  style={{
                                    flex: 1,
                                    display: "flex"
                                  }}
                                >
                                  <OverlayTrigger
                                    trigger="click"
                                    placement="left"
                                    overlay={popover}
                                    rootClose
                                  >
                                    <Button
                                      bsStyle="link"
                                      onClick={() =>
                                        this.setState({
                                          selectedWord: myword[1]
                                        })
                                      }
                                    >
                                      {" "}
                                      {myword[1]}
                                    </Button>
                                  </OverlayTrigger>
                                </div>
                                <div
                                  style={{
                                    flex: 1,
                                    display: "flex"
                                  }}
                                >
                                  <OverlayTrigger
                                    trigger="click"
                                    placement="bottom"
                                    overlay={popover}
                                    rootClose
                                  >
                                    <Button
                                      bsStyle="link"
                                      onClick={() =>
                                        this.setState({
                                          selectedWord: myword[2]
                                        })
                                      }
                                    >
                                      {" "}
                                      {myword[2]}
                                    </Button>
                                  </OverlayTrigger>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </td>
                     */}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Vocabulary;
