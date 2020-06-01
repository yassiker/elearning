import React, { Component } from "react";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

class DialogPractice extends Component {
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

  checkAnswerHandler = () => {
    this.setState({
      answered: this.state.answered.concat([{ answer: this.state.answer }])
    });
  };

  updateSearch = idx => evt => {
    console.log(idx);
    const newShareholders = this.state.questions.map((answer, sidx) => {
      if (idx !== sidx) return answer;
      return { ...answer, answer: evt.target.value };
    });

    this.setState({ questions: newShareholders, answer: evt.target.value });
  };

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
          <div style={{ display: "flex", flex: 1 }}>
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                overflow: "scroll"
              }}
            >
              <h1>Practice 1</h1>
              <h3>Write the words in order to form sentences. </h3>

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
                      >
                        <input
                          type="text"
                          placeholder="Type your answer here"
                          onChange={this.updateSearch(index)}
                          value={this.state.questions.qst}
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-primary"
                            type="button"
                            onClick={() => this.checkAnswerHandler()}
                          >
                            Check
                          </button>
                        </div>
                        <p
                          style={{
                            color:
                              this.state.checkAnswer.length > 0
                                ? "green"
                                : "red"
                          }}
                        >
                          {this.state.checkAnswer}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
            <div style={{ display: "flex", flex: 1, backgroundColor: "white" }}>
              <ol>
                {this.state.answered.map((answer, index) => {
                  console.log(answer.answer);
                  return <li key={{ index }}>{answer.answer}</li>;
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DialogPractice;
