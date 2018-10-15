import React, { Component } from "react";
import WordExample from "./WordExample";

class LetterExmpleList extends Component {
  render() {
    const { data } = this.props;

    return (
      <div
        style={{
          height: "50%",
          paddingLeft: "15px",
          paddingRight: "15px",
          width: "100%"
        }}
      >
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col" className="bg-primary">
                Letter...
              </th>
              <th scope="col" className="bg-success">
                ...Letter...
              </th>
              <th scope="col" className="bg-danger">
                ...Letter
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((element, index) => {
              return <WordExample key={`element_${index}`} data={element} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default LetterExmpleList;
