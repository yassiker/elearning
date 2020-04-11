import React, { Component } from "react";
import MapComponent from "../components/MapComponent";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
class LexiconContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lexicon: null,
      search: "",
      displayMap: false,
      selected: {
        lex: null,
        arabic: null,
        french: null,
        english: null,
        root: null,
        pos: null,
        gender: null,
        number: null,
        annexed: null,
        plural: null
      },
      selectedWord: ["ⴰⴼⵔⵉ", "(n, m)", "Naturally occurring cavity formed underground", "Cave", "cave.jpg"]
    };
  }

  componentDidMount() {
    this.getDataFromDb();
  }

  getDataFromDb = () => {
    fetch("/api/entities")
      .then(response => response.json())
      .then(json => this.setState({ lexicon: json }));
  };

  updateSearch = event => {
    this.setState({
      search: event.target.value.substr(0, 20)
    });
  };

  onChangeWord = selected => {
    this.setState({
      selected
    });
  };

  renderSyntaxTable() {
    const { pos, gender, number, annexed, plural, root } = this.state.selected;
    // console.log("pos: " + JSON.stringify(this.state.selected));
    // console.log("nice: " + !("myKey" in this.state.selected) && (this.state.selected.myKey = {}));
    return (
      <tr>
        <td>{pos ? pos : "null"}</td>
        <td>{gender ? gender : null}</td>
        <td>{number ? number : null}</td>
        <td>{annexed ? annexed : null}</td>
        <td>{plural ? plural : null}</td>
        <td>{root ? root : null}</td>
      </tr>
    );
  }

  renderTableData() {
    const { arabic, french, english } = this.state.selected;

    return (
      <tr>
        <td>{arabic ? arabic : "null"}</td>
        <td>{english}</td>
        <td>{french}</td>
      </tr>
    );
  }

  render() {
    let filteredWords =
      this.state.lexicon &&
      this.state.lexicon.length > 0 &&
      this.state.lexicon.filter(item => {
        if (item[0].properties.lex && item[0].properties.lex.length > 0) {
          return item[0].properties.lex.toLowerCase().startsWith(this.state.search.toLowerCase()) === true;
        }
        return null;
      });

    return (
      <div style={{ flex: 1, height: "100%" }}>
        <Header onChangeValue={this.updateSearch} />
        <Sidebar updateDialog={this.updateUnitDialog} />
        <div className="content-wrapper" style={styles.wrapper}>
          <div style={styles.container}>
            <div style={{ display: "flex", flex: 7 }}>
              {this.props.match.params.id === "all" ? (
                <ul className="box box-info" style={styles.listWrapper}>
                  {" "}
                  <h2>WordList</h2>
                  {filteredWords &&
                    filteredWords.map((item, index) => {
                      return (
                        <li key={index} className="list--list-item" data-gender="Noun" style={styles.listItem} onClick={() => this.onChangeWord(item[0].properties)}>
                          <div className="col-md-12">
                            <div className="box box-success collapsed-box">
                              <div className="box-header with-border">
                                <h1 className="box-title name" style={{ fontSize: "20px" }}>
                                  {item[0].properties.lex}
                                </h1>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              ) : null}
              <div style={styles.wordWrapper}>
                <div className="wordClass" style={styles.wordContent}>
                  <div style={styles.wordHeader}>
                    <div style={{ flex: 1, display: "flex" }}>
                      <i
                        style={{
                          color: "red",
                          fontSize: "60px",
                          cursor: "pointer",
                          padding: "top: 10px"
                        }}
                        className="fa fa-volume-up pull-right"
                      />
                    </div>
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center"
                      }}
                    >
                      <h1
                        className=""
                        style={{
                          color: "#3a87ad",
                          fontSize: "50px",
                          margin: 0
                        }}
                      >
                        {this.state.selected && this.state.selected.lex}
                      </h1>
                    </div>

                    <div style={styles.selectedWord}> {this.state.selected && this.state.selected.latin}</div>
                  </div>
                  <div style={{ height: "70%" }}>
                    <span
                      className="mainElements"
                      style={{
                        color: "orange",
                        fontSize: 18,
                        fontWeight: "bold"
                      }}
                    >
                      Syntax
                    </span>
                    {this.state.selected && (
                      <div>
                        <table id="translation" className="table table-responsive table-bordered table-sm table-dark">
                          <thead>
                            <tr>
                              <th scope="col" className="bg-success">
                                POS
                              </th>
                              <th scope="col" className="bg-success">
                                Gender
                              </th>
                              <th scope="col" className="bg-success">
                                Number
                              </th>
                              <th scope="col" className="bg-success">
                                Annexed
                              </th>
                              <th scope="col" className="bg-success">
                                Plural
                              </th>
                              <th scope="col" className="bg-success">
                                Root
                              </th>
                            </tr>
                          </thead>
                          <tbody>{this.renderSyntaxTable()}</tbody>
                        </table>
                      </div>
                    )}
                    <div>
                      <span
                        className="mainElements"
                        style={{
                          color: "orange",
                          fontSize: 18,
                          fontWeight: "bold"
                        }}
                      >
                        Translations
                      </span>
                      {this.state.selected && (
                        <div>
                          <table id="translation" className="table table-bordered table-hover table-dark">
                            <thead>
                              <tr>
                                <th scope="col" className="bg-success">
                                  Arabic
                                </th>
                                <th scope="col" className="bg-success">
                                  English
                                </th>
                                <th scope="col" className="bg-success">
                                  French
                                </th>
                              </tr>
                            </thead>
                            <tbody>{this.renderTableData()}</tbody>
                          </table>
                        </div>
                      )}
                    </div>
                    {/* <div>
                      <span
                        className="mainElements"
                        style={{
                          color: "orange",
                          fontSize: 18,
                          fontWeight: "bold"
                        }}
                      >
                        Pictures
                      </span>
                      <div className="imageContainer">
                        Pictures not available
                         <img src={require(`../assets/images/${this.state.selectedWord[4]}`)} alt="Girl in a jacket" width="150" height="150" />
                      </div>
                    </div>  */}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      height: "20%",
                      width: "100%",
                      justifyContent: "flex-end",
                      alignItems: "flex-end"
                    }}
                  >
                    <button type="button" className="btn btn-default bg-orange pull-right" data-toggle="modal" data-target="#modal-default" style={{ margin: "10px" }}>
                      <a style={{ color: "white" }}>Regional Variants</a>
                    </button>
                    <button type="button" className="btn btn-primary pull-right" style={{ margin: "10px" }}>
                      <Link to={`/tamazight/addWord/${this.state.selectedWord[0]}`}>Edit Lexicon</Link>
                    </button>
                  </div>
                </div>
              </div>

              <div className="modal fade" id="modal-default" style={{ height: "100%" }}>
                <div className="modal-dialog" style={{ height: "100%" }}>
                  <div
                    className="modal-content"
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      height: "100%"
                    }}
                  >
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                      <h4 className="modal-title">Location and other details</h4>
                    </div>
                    <div
                      className="modal-body"
                      style={{
                        width: "95%",
                        height: "80%"
                      }}
                    >
                      <MapComponent />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LexiconContainer;

const styles = {
  wrapper: {
    display: "flex",
    flex: 1
  },
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column"
  },
  listWrapper: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    overflowY: "scroll",
    listStyle: "none",
    margin: 15,
    alignItems: "center",
    padding: 0,
    height: "100%"
  },
  listItem: {
    cursor: "pointer",
    width: "100%"
  },
  wordWrapper: {
    display: "flex",
    boxSizing: "border-box",
    border: "2px solid #00a65a",
    borderRadius: "5px 5px",
    boxShadow: "0px 0px 10px 5px #00a65a",
    backgroundColor: "white",
    margin: "15px",
    direction: "ltr" // latin
  },
  wordContent: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    padding: 10
  },
  wordHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid red",
    paddingBottom: 15
  },
  selectedWord: {
    flex: 1,
    display: "flex",
    whiteSpace: "normal",
    color: "#3a87ad",
    fontSize: "40px",
    lineHeight: "90%",
    justifyContent: "flex-end"
  }
};
