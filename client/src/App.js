import React, { Component } from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import "./Main.css";
import "./assets/skins/skin-greens.css";
import { translate } from "react-i18next";
import CultureContainer from "./containers/CultureContainer";
import Unit from "./containers/Unit";
import Unit0 from "./containers//BaseUnit/Unit0";
import Anthroponym from "./containers/Anthroponym";
import ToponymContainer from "./containers/Toponym";
import Home from "./containers/HomeContainer/Home";
import Template from "./containers/Template";
import DialogPractice from "./containers/DialogPractice";
import UnitDialog from "./containers/UnitDialog";
import ReadingContainer from "./containers/ReadingContainer";
import ReadingAddition from "./containers/addUnitReading";
import WritingAddition from "./containers/addWriting";
import TifinaghLetter from "./containers/BaseUnit/TifinaghLetter";
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
import DialogList from "./containers/DialogList";
import ModalComponent from "./components/Modal";
import Vocabulary from "./containers/Vocabulary";
import DialogAddition from "./containers/addUnitDialog";
import AnthroContainer from "./containers/AnthroContainer";
import TabContainer from "./containers/TabContainer";
import PracticeAddition from "./containers/addDialogPractice";
import WritingContainer from "./containers/writingContainer";
import LoginContainer from "./containers/LoginContainer/index";
import ForgetLoginCredentials from "./containers/LoginContainer/forgetLoginPassword";
import SignUpScreen from "./containers/LoginContainer/signUp";

class App extends Component {
  state = {
    response: "",
  };

  componentWillReceiveProps(NewProps) {
    console.log(NewProps);
  }

  render() {
    return (
      <div className="App" style={{ flex: 1, display: "flex" }}>
        <BrowserRouter>
          <div style={{ flex: 1, display: "flex" }}>
            <Switch>
              {/* <Route path="/" component={LoginScreen} exact /> */}
              <Route path="/" component={LoginContainer} exact />
              <Route path="/forgetPassword" component={ForgetLoginCredentials} exact />
              <Route path="/signup" component={SignUpScreen} exact />
              <Route path="/home" component={Home} exact />
              <Route path="/temp" component={Template} />
              <Route path="/culture" component={CultureContainer} />
              <Route path="/unit" component={Unit} />
              <Route path="/unit0" component={Unit0} />
              <Route path="/anthroponym/:id" component={Anthroponym} />
              <Route path="/toponym" component={ToponymContainer} />
              <Route path="/dialog" component={DialogPractice} />
              <Route path="/videoD" component={UnitDialog} />
              <Route path="/add/:id" component={ToponymItem} />
              <Route path="/reading" component={ReadingContainer} />
              <Route path="/writing" component={WritingContainer} />
              <Route path="/addUntiReading" component={ReadingAddition} />
              <Route path="/addUnitWriting" component={WritingAddition} />
              <Route path="/letter" component={TifinaghLetter} />
              <Route path="/translate" component={ForceUpdateGator} />
              <Route path="/unitTable" component={BaseUnitTable} />
              <Route path="/lexicon/:id" component={Lexicon} />
              <Route path="/lexicon/all" component={Lexicon} />
              <Route path="/tamazight/addWord/:id" component={AddWord} />
              <Route path="/sample" component={Sample} />
              <Route path="/grammar" component={Grammar} />
              <Route path="/evaluation" component={Evaluation} />
              <Route path="/pronunciation" component={Pronunciation} />
              <Route path="/ilos" component={ILOS} />
              <Route path="/pop" component={PopOver} />
              <Route path="/dialogList" component={DialogList} />
              <Route path="/tr" component={ModalComponent} />
              <Route path="/vocabulary" component={Vocabulary} />
              <Route path="/addDialog" component={DialogAddition} />
              <Route path="/anthroContainer" component={AnthroContainer} />
              <Route path="/tab" component={TabContainer} />
              <Route path="/addPractice" component={PracticeAddition} />
              <Route path="*" component={() => "404 NOT FOUND"} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default translate("common")(withRouter(App));
// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps,
// )(App);
