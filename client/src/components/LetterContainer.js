import React, { Component } from "react";
import { Link } from "react-router-dom";

class LetterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: ["ⴻ", "ⵣ", "ⵔ", "ⵜ", "ⵢ", "ⵉ", "ⵃ", "ⵇ", "ⵙ", "ⵅ", "ⴷ", "ⴼ", "ⴳ", "ⵀ", "ⵊ", "ⴽ", "ⵍ"]
    };
  }

  handleClick = event => {
    console.log(event);
  };

  render() {
    return (
      <div
        style={{
          letterSpacing: "25px",
          margin: "20px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "20px"
        }}
        className="col-lg-10"
      >
        {this.state.letters.map((letter, index) => {
          return (
            <span key={index} onClick={() => this.handleClick(letter)} value={letter} style={{ cursor: "pointer" }}>
              <Link to="/letter" onClick={this.forceUpdate}>
                {letter}
              </Link>
            </span>
          );
        })}
      </div>
    );
  }
}

export default LetterContainer;
