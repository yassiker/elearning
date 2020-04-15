import React, { Component } from "react";
import { Link } from "react-router-dom";
import unitStyle from "./unitStyle";
const tifinaghLetters = ["ⴻ", "ⵣ", "ⵔ", "ⵜ", "ⵢ", "ⵉ", "ⵃ", "ⵇ", "ⵙ", "ⵅ", "ⴷ", "ⴼ", "ⴳ", "ⵀ", "ⵊ", "ⴽ", "ⵍ"];

class LetterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: tifinaghLetters,
    };
  }

  handleClick = (event) => {
    console.log(event);
  };

  render() {
    const { letters } = this.state;
    return (
      <div style={unitStyle.letterPageContainer} className="col-lg-10">
        {letters.map((letter, index) => {
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
