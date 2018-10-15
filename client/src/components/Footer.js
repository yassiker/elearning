import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="main-footer" style={{ backgroundColor: "#00a65a" }}>
        <div className="pull-right hidden-xs">Version 1.0</div>
        <strong>
          Copyright &copy; 2016 Al Akhawayn University & IRCAM .
        </strong>{" "}
        All rights reserved.
      </footer>
    );
  }
}

export default Footer;
