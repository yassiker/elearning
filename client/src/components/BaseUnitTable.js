import React, { Component } from "react";

class BaseUnitTable extends Component {
  render() {
    return (
      <table
        id="example"
        className="table table-striped table-bordered"
        style={{ width: "100%" }}
      >
        <thead>
          <tr>
            <th>Letter</th>
            <th>Arabic</th>
            <th>Latin</th>
            <th>Sound</th>
            <th>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  Letter Position
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ color: "brown" }}>A.....</div>
                  <div style={{ color: "red" }}>...A...</div>
                  <div style={{ color: "orange" }}>.....A</div>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A</td>
            <td>Arabic</td>
            <td>Latin</td>
            <td>
              <audio controls>
                {/* <source src="sounds/a.mp3" type="audio/ogg" />
                <source src="sounds/a.mp3" type="audio/mpeg" /> */}
                Your browser does not support the audio element.
              </audio>
            </td>
            <td>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ flex: 1 }}>
                  <div data-toggle="collapse" data-target="#demo">
                    Word1
                  </div>
                  <div>
                    <div id="demo" className="collapse">
                      <div
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          display: "flex",
                          justifyContent: "space-between"
                        }}
                      >
                        <div>
                          <a>
                            <i className="fa fa-volume-up" />
                          </a>
                        </div>
                        <div>
                          {" "}
                          <a href="lexicon">
                            <i className="fa fa-book" />
                          </a>
                        </div>
                        <div>
                          {" "}
                          <a href="addNewWord">
                            <i className="fa fa-edit" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{ flex: 1, display: "flex", justifyContent: "center" }}
                >
                  Word2
                </div>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "flex-end"
                  }}
                >
                  Word3
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>A</td>
            <td>Arabic</td>
            <td>Latin</td>
            <td>
              <audio controls>
                {/* <source src="sounds/a.mp3" type="audio/ogg" />
                <source src="sounds/a.mp3" type="audio/mpeg" /> */}
                Your browser does not support the audio element.
              </audio>
            </td>
            <td>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Word1</div>
                <div>Word2</div>
                <div>Word3</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Word1</div>
                <div>Word2</div>
                <div>Word3</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Word1</div>
                <div>Word2</div>
                <div>Word3</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>A</td>
            <td>Arabic</td>
            <td>Latin</td>
            <td>
              <audio controls>
                {/* <source src="sounds/a.mp3" type="audio/ogg" />
                <source src="sounds/a.mp3" type="audio/mpeg" /> */}
                Your browser does not support the audio element.
              </audio>
            </td>
            <td>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Word1</div>
                <div>Word2</div>
                <div>Word3</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Word1</div>
                <div>Word2</div>
                <div>Word3</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Word1</div>
                <div>Word2</div>
                <div>Word3</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>A</td>
            <td>Arabic</td>
            <td>Latin</td>
            <td>
              <audio controls>
                {/* <source src="sounds/a.mp3" type="audio/ogg" />
                <source src="sounds/a.mp3" type="audio/mpeg" /> */}
                Your browser does not support the audio element.
              </audio>
            </td>
            <td>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Word1</div>
                <div>Word2</div>
                <div>Word3</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Word1</div>
                <div>Word2</div>
                <div>Word3</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Word1</div>
                <div>Word2</div>
                <div>Word3</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>A</td>
            <td>Arabic</td>
            <td>Latin</td>
            <td>
              <audio controls>
                {/* <source src="sounds/a.mp3" type="audio/ogg" />
                <source src="sounds/a.mp3" type="audio/mpeg" /> */}
                Your browser does not support the audio element.
              </audio>
            </td>
            <td>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Word1</div>
                <div>Word2</div>
                <div>Word3</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Word1</div>
                <div>Word2</div>
                <div>Word3</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Word1</div>
                <div>Word2</div>
                <div>Word3</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default BaseUnitTable;
