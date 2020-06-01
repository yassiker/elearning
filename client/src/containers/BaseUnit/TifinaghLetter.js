import React, { Component } from 'react';

import Header from '../../components/Header';
import { consonants, vowels, semivowels } from '../tifinaghLetters';
import { Link } from 'react-router-dom';
import cedarLogo from '../../assets/images/cedfin.png';
import { styles } from './tifinaghLetterStyle';
import LetterTypes from './letterTypes';
import { letterFamily } from './constants';

class TifinaghLetter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: null,
      play: false,
      letterTypes: letterFamily,
      active: null,
      sectionName: 'vowels',
    };
  }

  componentWillMount() {
    this.setState({
      letters: vowels.letters,
    });
  }

  myColor = (position) => {
    if (this.state.active === position) {
      return '#00a65a';
    }
    return '';
  };

  toggle = (position, item, key) => {
    switch (position) {
      case 0:
        this.setState({
          active: null,
          sectionName: item,
          letters: consonants.letters,
        });
        break;
      case 1:
        this.setState({
          active: null,
          sectionName: item,
          letters: semivowels.letters,
        });
        break;
      case 2:
        this.setState(
          {
            active: null,
            sectionName: item,
            letters: consonants.letters,
          },
          () => console.log('leteers: ' + JSON.stringify(this.state.letters))
        );
        break;
      default:
        console.log('nothing');
    }
  };

  renderSideMenu = () => {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <ul className="sidebar-menu">
            <li className="header" style={styles.baseUnitHeader}>
              {'Unit 0'}
            </li>
          </ul>
        </section>
      </aside>
    );
  };

  render() {
    const { letters, letterTypes } = this.state;
    if (!this.state.letters) {
      return <div>Loading....</div>;
    }
    return (
      <div style={{ flex: 1, height: '100%' }}>
        <Header />
        {this.renderSideMenu()}
        <div
          className="content-wrapper"
          style={{
            display: 'flex',
            flex: 1,
          }}
        >
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              width: 0,
            }}
          >
            <div
              style={{
                flex: 0.2,
                display: 'flex',
                borderBottom: '0px solid black',
                boxShadow: '0px 0px 10px #00a65a',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  flex: 1,
                  color: '#00a65a',
                }}
              >
                <Link href="" to="/" onClick={this.forceUpdate}>
                  <img src={cedarLogo} alt="" style={{ height: '60px' }} />
                </Link>
              </div>
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Link to="/unit0" onClick={this.forceUpdate}>
                  <img
                    src={require(`../../assets/images/blackboardIcon.png`)}
                    style={{
                      height: '50px',
                      cursor: 'pointer',
                    }}
                    alt=""
                  />
                </Link>
              </div>
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginRight: 10,
                }}
              >
                <Link to="/unitTable" onClick={this.forceUpdate}>
                  {' '}
                  <button
                    className="btn btn-success"
                    onClick={this.viewAll}
                    style={{
                      marginRight: '10px',
                      whiteSpace: 'normal',
                      width: 150,
                    }}
                  >
                    letters and words written in tifinagh
                  </button>
                </Link>
              </div>
            </div>
            <LetterTypes letters={letters} letterTypes={letterTypes} />
          </div>
        </div>
      </div>
    );
  }
}

export default TifinaghLetter;
