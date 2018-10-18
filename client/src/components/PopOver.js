import React, { Component } from "react";

// import MapComponent from "../components/MapComponent";
import cedarLogo from "../assets/images/cedfin.png";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";

// import { Link } from "react-router-dom";

class PopOver extends Component {
  render() {
    const popoverLeft = (
      <Popover id="popover-positioned-left" title="Popover left">
        <strong>Holy guacamole!</strong> Check this info.
      </Popover>
    );

    const popoverTop = (
      <Popover id="popover-positioned-top" title="Popover top">
        <strong>Holy guacamole!</strong> Check this info.
      </Popover>
    );

    const popoverBottom = (
      <Popover id="popover-positioned-bottom" title="Popover bottom">
        <strong>Holy guacamole!</strong> Check this info.
      </Popover>
    );

    const popoverRight = (
      <Popover id="popover-positioned-right" title="Popover right">
        <strong>Holy guacamole!</strong> Check this info.
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
            <h3 style={{ margin: 0 }}>ILOS</h3>
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
            alignItems: "center"
          }}
        >
          {/* <ButtonToolbar> */}
          <OverlayTrigger
            trigger="click"
            placement="left"
            overlay={popoverLeft}
          >
            <Button>Holy guacamole!</Button>
          </OverlayTrigger>
          <OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
            <Button>Holy guacamole!</Button>
          </OverlayTrigger>
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={popoverBottom}
          >
            <Button>Holy guacamole!</Button>
          </OverlayTrigger>
          <OverlayTrigger
            trigger="click"
            placement="right"
            overlay={popoverRight}
          >
            <Button>Holy guacamole!</Button>
          </OverlayTrigger>
          {/* </ButtonToolbar> */}
        </div>
      </div>
    );
  }
}

export default PopOver;
