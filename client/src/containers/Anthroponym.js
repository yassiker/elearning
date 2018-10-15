import React, { Component } from "react";

import Background from "../assets/images/boxed-bg.jpg";

class Anthroponym extends Component {
  render() {
    return (
      <div
        className="content-wrapper"
        style={{
          backgroundImage: `url(${Background})`,
          height: "88%",
          backgroundRepeat: "no-repeat"
        }}
      >
        <section
          className="content-header"
          style={{
            borderBottom: "0px solid black",
            height: "57px",
            boxShadow: "0px 0px 10px #00a65a"
          }}
        >
          <h1>Anthroponym</h1>
        </section>

        <section className="content" style={{ height: "100%" }}>
          <div className="row" style={{ padding: "20px", height: "100%" }}>
            <div
              id="users"
              className="col-xs-2"
              style={{
                padding: "0",
                height: "100%é",
                marginRight: "40px",
                marginLeft: "40px",
                border: "2px solid #00a65a",
                boxShadow: "0px 0px 10px 5px #00a65a"
              }}
            >
              <div
                className="col-xs-12 filter-group row"
                style={{ margin: 0, padding: 0 }}
              >
                <div
                  className="form-group col-xs-12 col-sm-12 col-md-8"
                  style={{ paddingRight: 0, paddingLeft: 0 }}
                >
                  <input
                    type="text"
                    // onkeyup="search()"
                    id="myInput"
                    className="search form-control"
                    placeholder="Search"
                  />
                </div>
              </div>
              <ul
                className="col-md-12 list"
                id="myUL"
                style={{ overflowY: "scroll", height: "90%" }}
              />
            </div>

            <div
              className="modal fade"
              id="modal-default"
              style={{ height: "100%" }}
            >
              <div className="modal-dialog" style={{ height: "100%" }}>
                <div
                  className="modal-content"
                  style={{ height: "100%", width: "120%" }}
                >
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">times</span>
                    </button>
                    <h4 className="modal-title">Location and other details</h4>
                  </div>
                  <div className="modal-body" style={{ height: "80%" }}>
                    <div id="map" />
                  </div>
                </div>
              </div>
            </div>

            <div
              id="wordDetail"
              className="col-md-9"
              style={{
                height: "100%",
                boxSizing: "border-box",
                display: "block",
                border: "2px solid #00a65a",
                borderRadius: "5px 5px",
                padding: "10px",
                boxShadow: "0px 0px 10px 5px #00a65a",
                backgroundColor: "white"
              }}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default Anthroponym;
