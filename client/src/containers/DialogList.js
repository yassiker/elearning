import React, { Component } from "react";
import cedarLogo from "../assets/images/cedfin.png";

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
              Add Video
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
          <div style={{ flex: 1, flexDirection: "column", display: "flex" }}>
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
              {/*  */}
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

          {/* <div style={{ flex: 1, display: "flex" }}>
            <div style={{ margin: 10, flex: 1, display: "flex" }}>
              <div
                className="modal fade"
                id="modal1"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="myModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                    <div className="modal-body mb-0 p-0">
                      <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                        <iframe
                          className="embed-responsive-item"
                          src="https://www.youtube.com/embed/A3PDXmYoF5U"
                          allowFullScreen
                        />
                      </div>
                    </div>

                    <div className="modal-footer justify-content-center">
                      <span className="mr-4">Spread the word!</span>
                      <a type="button" className="btn-floating btn-sm btn-fb">
                        <i className="fa fa-facebook" />
                      </a>

                      <a type="button" className="btn-floating btn-sm btn-tw">
                        <i className="fa fa-twitter" />
                      </a>

                      <a
                        type="button"
                        className="btn-floating btn-sm btn-gplus"
                      >
                        <i className="fa fa-google-plus" />
                      </a>

                      <a type="button" className="btn-floating btn-sm btn-ins">
                        <i className="fa fa-linkedin" />
                      </a>

                      <button
                        type="button"
                        className="btn btn-outline-primary btn-rounded btn-md ml-4"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <a>
                <img
                  style={{ height: 200 }}
                  className="img-fluid z-depth-1"
                  src="https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg"
                  alt="video"
                  data-toggle="modal"
                  data-target="#modal1"
                  data-backdrop="false"
                />
              </a>
            </div>

            <div style={{ margin: 10, flex: 1, display: "flex" }}>
              <div
                className="modal fade"
                id="modal6"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="myModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                    <div className="modal-body mb-0 p-0">
                      <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                        <iframe
                          className="embed-responsive-item"
                          src="https://www.youtube.com/embed/wTcNtgA6gHs"
                          allowFullScreen
                        />
                      </div>
                    </div>

                    <div className="modal-footer justify-content-center">
                      <span className="mr-4">Spread the word!</span>
                      <a type="button" className="btn-floating btn-sm btn-fb">
                        <i className="fa fa-facebook" />
                      </a>

                      <a type="button" className="btn-floating btn-sm btn-tw">
                        <i className="fa fa-twitter" />
                      </a>

                      <a
                        type="button"
                        className="btn-floating btn-sm btn-gplus"
                      >
                        <i className="fa fa-google-plus" />
                      </a>

                      <a type="button" className="btn-floating btn-sm btn-ins">
                        <i className="fa fa-linkedin" />
                      </a>

                      <button
                        type="button"
                        className="btn btn-outline-primary btn-rounded btn-md ml-4"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <a>
                <img
                  style={{ height: 200 }}
                  className="img-fluid z-depth-1"
                  src="https://mdbootstrap.com/img/screens/yt/screen-video-2.jpg"
                  alt="video"
                  data-toggle="modal"
                  data-target="#modal6"
                  data-backdrop="false"
                />
              </a>
            </div>

            <div style={{ margin: 10, flex: 1, display: "flex" }}>
              <div
                className="modal fade"
                id="modal4"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="myModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                    <div className="modal-body mb-0 p-0">
                      <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                        <iframe
                          className="embed-responsive-item"
                          src="https://www.youtube.com/embed/vlDzYIIOYmM"
                          allowFullScreen
                        />
                      </div>
                    </div>

                    <div className="modal-footer justify-content-center">
                      <span className="mr-4">Spread the word!</span>
                      <a type="button" className="btn-floating btn-sm btn-fb">
                        <i className="fa fa-facebook" />
                      </a>

                      <a type="button" className="btn-floating btn-sm btn-tw">
                        <i className="fa fa-twitter" />
                      </a>

                      <a
                        type="button"
                        className="btn-floating btn-sm btn-gplus"
                      >
                        <i className="fa fa-google-plus" />
                      </a>

                      <a type="button" className="btn-floating btn-sm btn-ins">
                        <i className="fa fa-linkedin" />
                      </a>

                      <button
                        type="button"
                        className="btn btn-outline-primary btn-rounded btn-md ml-4"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <a>
                <img
                  style={{ height: 200 }}
                  className="img-fluid z-depth-1"
                  src="https://mdbootstrap.com/img/screens/yt/screen-video-3.jpg"
                  alt="video"
                  data-toggle="modal"
                  data-target="#modal4"
                  data-backdrop="false"
                />
              </a>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default DialogList;
