import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import unitStyle from './unitStyle';
import { tifinaghLetters } from './constants';

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
            <span
              key={index}
              onClick={() => this.handleClick(letter)}
              value={letter}
              style={unitStyle.letterStyle}
            >
              <Link href="" to={`/letter/${letter}`} onClick={this.forceUpdate}>
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
