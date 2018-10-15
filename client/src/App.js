import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./Main.css";
import "./assets/skins/skin-greens.css";
import { translate } from "react-i18next";

import Header from "./components/Header";
// import Footer from "./components/Footer";

import CultureContainer from "./containers/CultureContainer";
import Unit from "./containers/Unit";
import Unit0 from "./containers/Unit0";
import Anthroponym from "./containers/Anthroponym";
// import Navigation from "./containers/Navigation";
import ToponymContainer from "./containers/Toponym";
// import LetterComponent from "./components/LetterComponent";
import Home from "./containers/Home";
import Template from "./containers/Template";
import Sidebar from "./components/Sidebar";
import DialogPractice from "./containers/DialogPractice";
import AnotherDialogPr from "./containers/AnotherDialogPr";
import UnitDialog from "./containers/UnitDialog";
import ReadingContainer from "./containers/ReadingContainer";
import ReadingAddition from "./containers/addUnitReading";
import TifinaghLetter from "./components/TifinaghLetter";
import ForceUpdateGator from "./containers/TranslationExample";
import BaseUnitTable from "./components/BaseUnitTable";
import Lexicon from "./containers/Lexicon";
import ToponymItem from "./components/ToponymItem";
import AddWord from "./containers/AddWord";
import Sample from "./containers/Sample";
import Grammar from "./containers/Grammar";
import Evaluation from "./containers/Evaluation";
import Pronunciation from "./containers/Pronunciation";
import ILOS from "./containers/ILOS";
import PopOver from "./components/PopOver";

class App extends Component {
  state = {
    response: ""
  };

  componentDidMount() {
    // this.callApi()
    //   .then(res => this.setState({ response: res.express }))
    //   .catch(err => console.log(err));
  }

  componentWillReceiveProps(NewProps) {
    console.log(NewProps);
  }

  // callApi = async () => {
  //   const response = await fetch("/api/hello");
  //   const body = await response.json();

  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // };

  render() {
    // if (this.props.location) {
    //   console.log(JSON.stringify(this.props.location.pathname));
    // }

    return (
      <div className="App">
        <Header />
        <Sidebar unit="UNIT 1" />
        <div
          className="content-wrapper"
          style={{
            display: "flex",
            flex: 1
          }}
        >
          <BrowserRouter>
            <div style={{ flex: 1, display: "flex" }}>
              {/* <Navigation /> */}
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/temp" component={Template} />
                <Route path="/culture" component={CultureContainer} />
                <Route path="/unit" component={Unit} />
                <Route path="/unit0" component={Unit0} />
                <Route path="/anthroponym" component={Anthroponym} />
                <Route path="/toponym" component={ToponymContainer} />
                <Route path="/dialog" component={DialogPractice} />
                <Route path="/otherD" component={AnotherDialogPr} />
                <Route path="/videoD" component={UnitDialog} />

                <Route path="/add/:id" component={ToponymItem} />

                <Route path="/reading" component={ReadingContainer} />
                <Route path="/addUntiReading" component={ReadingAddition} />
                <Route path="/letter" component={TifinaghLetter} />
                <Route path="/translate" component={ForceUpdateGator} />
                <Route path="/unitTable" component={BaseUnitTable} />
                <Route path="/lexicon" component={Lexicon} />
                <Route path="/tamazight/addWord" component={AddWord} />
                <Route path="/sample" component={Sample} />
                <Route path="/grammar" component={Grammar} />
                <Route path="/evaluation" component={Evaluation} />
                <Route path="/pronunciation" component={Pronunciation} />
                <Route path="/ilos" component={ILOS} />
                <Route path="/pop" component={PopOver} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

// export default App;

export default translate("common")(App);
