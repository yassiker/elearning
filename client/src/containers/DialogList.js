import React, { Component } from "react";
import cedarLogo from "../assets/images/cedfin.png";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

const videos = [
  {
    src: "",
    thumbnail: "https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg"
  },
  {
    src: "",
    thumbnail: "https://mdbootstrap.com/img/screens/yt/screen-video-2.jpg"
  },
  {
    src: "",
    thumbnail: "https://mdbootstrap.com/img/screens/yt/screen-video-3.jpg"
  },
  {
    src: "",
    thumbnail: "https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg"
  }
];
class DialogList extends Component {
  render() {
    return (
      <div style={{ flex: 1, height: "100%" }}>
        <Header />
        <Sidebar updateDialog={this.updateUnitDialog} />
        <div
          className="content-wrapper"
          style={{
            display: "flex",
            flex: 1
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column"
            }}
          >
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
                <h3 style={{ margin: 0 }}>List</h3>
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "flex-end",
                  marginRight: 5
                }}
              >
                <button
                  className="btn btn-success"
                  onClick={() =>
                    this.setState({
                      showVideoList: true
                    })
                  }
                >
                  <Link to="/addDialog" onClick={this.forceUpdate}>
                    Add Video
                  </Link>
                </button>
              </div>
            </div>
            <div
              style={{
                flex: 7,
                display: "flex",
                padding: 10
              }}
            >
              <div
                style={{ flex: 1, flexDirection: "column", display: "flex" }}
              >
                <div className="well well-sm">
                  <strong>Display</strong>
                  <div className="btn-group" style={{ marginLeft: 10 }}>
                    <a
                      id="list"
                      className="btn btn-default btn-sm"
                      style={{ color: "blue" }}
                    >
                      <span className="glyphicon glyphicon-th-list" />
                      List
                    </a>{" "}
                    <a
                      id="grid"
                      className="btn btn-default btn-sm"
                      style={{ color: "blue" }}
                    >
                      <span className="glyphicon glyphicon-th" />
                      Grid
                    </a>
                  </div>
                </div>
                <div
                  id="products"
                  className="row list-group"
                  style={{ margin: 10, overflow: "scroll", flex: 1 }}
                >
                  {videos.map((item, index) => {
                    return (
                      <div className="item  col-xs-4 col-lg-4" key={index}>
                        <div className="thumbnail">
                          <img
                            className="group list-group-image"
                            src={item.thumbnail}
                            alt=""
                          />
                          <div className="caption">
                            <h4
                              className="group inner list-group-item-heading"
                              style={{ paddingTop: 10 }}
                            >
                              Video title
                            </h4>
                            <p
                              className="group inner list-group-item-text"
                              style={{ paddingTop: 10 }}
                            >
                              Video description...
                            </p>
                            <div className="row">
                              <div className="col-xs-12 col-md-12">
                                <a
                                  className="btn btn-success"
                                  style={{ width: "100%" }}
                                >
                                  Option
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DialogList;
