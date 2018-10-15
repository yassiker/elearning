import React, { Component } from "react";

// const questions = [
//   "take your order May I  ?",
//   "coffee, cup like a  I'd of  please. ",
//   "would you  drink What to  like ?",
//   "check, the have we Could  please  ? ",
//   "cake, I'll have  please the ."
// ];

class AnotherDialogPr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkAnswer: "",
      answer: "",
      questions: [
        { qst: "take your order May I  ?", answer: "" },
        { qst: "coffee, cup like a  I'd of  please. ", answer: "" },
        { qst: "would you  drink What to  like ?", answer: "" },
        { qts: "check, the have we Could  please  ? ", answer: "" },
        { qst: "cake, I'll have  please the .", answer: "" }
      ],
      answered: []
    };
  }

  render() {
    return (
      <div style={{ display: "flex", flex: 1 }}>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            overflow: "scroll"
          }}
        >
          <h1>Practice 2</h1>
          <h3>Order the following sentence by draging </h3>

          <ol style={{ fontSize: "25px" }}>
            {this.state.questions.map((question, index) => {
              return (
                <li key={index}>
                  <h3>{question.qst}</h3>
                  <div
                    className="input-group mb-3"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flex: 1
                    }}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default AnotherDialogPr;
