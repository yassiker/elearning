import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import withLogin from './highOrderComponents/withLogin';
import './Main.css';
import './assets/skins/skin-greens.css';
import { translate } from 'react-i18next';
import CultureContainer from './containers/CultureContainer';
import Unit from './containers/UnitsContainer/Unit';
import Unit0 from './containers//BaseUnit/Unit0';
import Anthroponym from './containers/AnthroponymContainer/Anthroponym';
import ToponymContainer from './containers/ToponymContainer/Toponym';
import Home from './containers/HomeContainer/Home';
import Template from './containers/Template';
import DialogPractice from './containers/DialogContainer/DialogPractice';
import UnitDialog from './containers/DialogContainer/UnitDialog';
import ReadingContainer from './containers/ReadingWritingContainer/ReadingContainer';
import ReadingAddition from './containers/ReadingWritingContainer/addUnitReading';
import WritingAddition from './containers/ReadingWritingContainer/addWriting';
import TifinaghLetter from './containers/BaseUnit/TifinaghLetter';
import ForceUpdateGator from './containers/TranslationExample';
import BaseUnitTable from './components/BaseUnitTable';
import Lexicon from './containers/LexiconContainer/Lexicon';
import ToponymItem from './containers/ToponymContainer/ToponymItem';
import AddWord from './containers/AddWord';
import Sample from './containers/Sample';
import Grammar from './containers/GrammarContainer/Grammar';
import Evaluation from './containers/Evaluation';
import Pronunciation from './containers/Pronunciation';
import ILOS from './containers/ILOS';
import PopOver from './components/PopOver';
import DialogList from './containers/DialogContainer/DialogList';
import ModalComponent from './components/Modal';
import Vocabulary from './containers/VocabularyContainer/Vocabulary';
import DialogAddition from './containers/DialogContainer/addUnitDialog';
import AnthroContainer from './containers/AnthroponymContainer/AnthroContainer';
import TabContainer from './containers/TabContainer';
import PracticeAddition from './containers/DialogContainer/addDialogPractice';
import WritingContainer from './containers/ReadingWritingContainer/writingContainer';
import LoginContainer from './containers/LoginContainer/index';
import ForgetLoginCredentials from './containers/LoginContainer/forgetLoginPassword';
import SignUpScreen from './containers/LoginContainer/signUp';

class App extends Component {
  state = {
    response: '',
  };

  componentWillReceiveProps(NewProps) {
    console.log(NewProps);
  }

  render() {
    return (
      <div className="App" style={{ flex: 1, display: 'flex' }}>
        <BrowserRouter>
          <div style={{ flex: 1, display: 'flex' }}>
            <Switch>
              {/* <Route path="/" component={LoginScreen} exact /> */}
              <Route path="/" component={LoginContainer} exact />
              <Route path="/forgetPassword" component={ForgetLoginCredentials} exact />
              <Route path="/signup" component={SignUpScreen} exact />
              <Route path="/home" component={withLogin(Home)} exact />
              <Route path="/temp" component={Template} />
              <Route path="/culture" component={withLogin(CultureContainer)} />
              <Route path="/unit" component={withLogin(Unit)} />
              <Route path="/unit0" component={withLogin(Unit0)} />
              <Route path="/anthroponym/:id" component={withLogin(Anthroponym)} />
              <Route path="/toponym" component={withLogin(ToponymContainer)} />
              <Route path="/dialog" component={withLogin(DialogPractice)} />
              <Route path="/videoD" component={withLogin(UnitDialog)} />
              <Route path="/add/:id" component={withLogin(ToponymItem)} />
              <Route path="/reading" component={withLogin(ReadingContainer)} />
              <Route path="/writing" component={withLogin(WritingContainer)} />
              <Route path="/addUntiReading" component={withLogin(ReadingAddition)} />
              <Route path="/addUnitWriting" component={WritingAddition} />
              <Route path="/letter" component={withLogin(TifinaghLetter)} />
              <Route path="/translate" component={ForceUpdateGator} />
              <Route path="/unitTable" component={withLogin(BaseUnitTable)} />
              <Route path="/lexicon/:id" component={withLogin(Lexicon)} />
              <Route path="/lexicon/all" component={withLogin(Lexicon)} />
              <Route path="/tamazight/addWord/:id" component={withLogin(AddWord)} />
              <Route path="/sample" component={Sample} />
              <Route path="/grammar" component={withLogin(Grammar)} />
              <Route path="/evaluation" component={withLogin(Evaluation)} />
              <Route path="/pronunciation" component={withLogin(Pronunciation)} />
              <Route path="/ilos" component={ILOS} />
              <Route path="/pop" component={PopOver} />
              <Route path="/dialogList" component={withLogin(DialogList)} />
              <Route path="/tr" component={ModalComponent} />
              <Route path="/vocabulary" component={withLogin(Vocabulary)} />
              <Route path="/addDialog" component={withLogin(DialogAddition)} />
              <Route path="/anthroContainer" component={withLogin(AnthroContainer)} />
              <Route path="/tab" component={TabContainer} />
              <Route path="/addPractice" component={withLogin(PracticeAddition)} />
              <Route path="*" component={() => '404 NOT FOUND'} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default translate('common')(withRouter(App));
// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps,
// )(App);
