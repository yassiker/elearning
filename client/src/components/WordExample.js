import React, { Component } from "react";

class WordExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["bg-primary", "bg-success", "bg-danger"]
    };
  }
  render() {

    return (
      <tr>
        {this.props.data.map((word, index) => {
          return (
            <td key={`word_${index}`} className={this.state.colors[index]}>
              {word}
            </td>
          );
        })}
      </tr>
    );
  }
}

export default WordExample;
