import React, { Component } from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const letterExamples = [
  {
    tifinagh: 'ⴰ',
    arabic: 'يا',
    latin: 'Ya',
    sound: require('../assets/sounds/Asound.mp3'),
    words: [
      ['ⴰⴱⴰⵖⵓⵖ', 'ⴰⴳⴰⵏ', 'ⴰⴳⴳⴰⵢ'],
      ['ⴰⴳⴳⵯⵔⵏ', 'ⴰⴳⵯⴷⵉⵍ', 'ⴰⴳⵯⵊⵊⵉⴼ'],
      ['word', 'worddd', 'word5'],
    ],
  },
  {
    tifinagh: 'ⴱ',
    arabic: 'ياب',
    latin: 'Yab',
    sound: require('../assets/sounds/Asound.mp3'),
    words: [
      ['ⴱⵉⵙⴽⵡⵉ', 'ⴱⵓⴳⴰⵏⴱⵍⵉ', 'ⴱⵓⵢⵉⵙⴽ'],
      ['ⴱⵓⵢⵜⵍⴰⵏ', 'second', 'second'],
      ['third', 'third', 'third'],
    ],
  },
  {
    tifinagh: 'ⵛ',
    arabic: '',
    latin: '',
    sound: require('../assets/sounds/yabSound.mp3'),
    words: [
      ['ⵛxxxx', 'xxⵛxx', 'xxxxⵛ'],
      ['second', 'second', 'second'],
      ['third', 'third', 'third'],
    ],
  },
  {
    tifinagh: 'ⵜ',
    arabic: '',
    latin: '',
    sound: require('../assets/sounds/Asound.mp3'),
    words: [
      ['ⵜⴰⴱⵉⵟⵍⵊⴰⵏⵜ', 'ⵜⴰⴱⵔⵓⵢⵜ', 'ⵜⴰⴱⵖⴰ'],
      ['ⵜⴰⴱⴰⵏⴽⴰ', 'ⵜⴰⴳⴰⵏⵜ', 'ⵜⴰⴳⴳⵓⵔⵜ'],
      ['third', 'third', 'third'],
    ],
  },
  {
    tifinagh: 'ⵓ',
    arabic: '',
    latin: '',
    sound: require('../assets/sounds/Asound.mp3'),
    words: [
      ['ⵓⴷⵎ', 'ⵓⵙⵎⴰⵏ', 'ⵓⵛⵛⵏ'],
      ['second', 'second', 'second'],
      ['third', 'third', 'third'],
    ],
  },
  {
    tifinagh: 'ⴽ',
    arabic: '',
    latin: '',
    sound: require('../assets/sounds/Asound.mp3'),
    words: [['ⴽⴰⵡⴽⴰⵡ', 'ⴽⴽⵓⵥ', 'ⴽⵕⴰⴹ']],
  },
  {
    tifinagh: 'ⵉ',
    arabic: '',
    latin: '',
    sound: require('../assets/sounds/Asound.mp3'),
    words: [
      ['ⵉⴳⵓⵎⵎⴰ', 'ⵉⴱⵓⵣⴰⴳⵏ', 'ⵉⴳⵉⴷⵓ'],
      ['ⵉⴳⴳⵉⵍ', 'ⵉⴷⵍⵉⵙⵏ', 'ⵉⴳⵓⵏⵜⵔⵏ'],
    ],
  },
];
class BaseUnitTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedWord: '',
    };
  }

  render() {
    const popover = (
      <Popover
        hide={false}
        id="popover-positioned-left"
        title={
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ flex: 1 }}>
              <strong>{this.state.selectedWord}</strong>
            </div>

            <div
              style={{ flex: 1, justifyContent: 'flex-end', display: 'flex' }}
            >
              <i
                className="fa fa-volume-up"
                style={{ color: 'blue', fontSize: 25 }}
              />
            </div>
          </div>
        }
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'space-between',
              padding: 10,
            }}
          >
            <Link
              to={`/tamazight/addWord/${this.state.selectedWord}`}
              onClick={this.forceUpdate}
            >
              {' '}
              <i
                className="fa fa-edit"
                style={{ color: 'red', fontSize: 25 }}
              />
            </Link>

            <Link href="#" to={`/lexicon`} onClick={this.forceUpdate}>
              <i
                className="fa fa-book"
                style={{ color: 'rebeccapurple', fontSize: 25 }}
              />
            </Link>
          </div>
        </div>
      </Popover>
    );

    return (
      <div style={{ flex: 1, height: '100%' }}>
        <Header />
        <Sidebar updateDialog={this.updateUnitDialog} />
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
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <div style={{ flex: 7, display: 'flex', overflow: 'scroll' }}>
              <table
                id="example"
                className="table table-striped table-bordered"
                style={{ width: '100%' }}
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
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          Letter Position
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                          }}
                        >
                          <div style={{ color: 'brown' }}>Start</div>
                          <div style={{ color: 'red' }}>Middle</div>
                          <div style={{ color: 'orange' }}>End</div>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {letterExamples.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.tifinagh}</td>
                        <td>{item.arabic}</td>
                        <td>{item.latin}</td>
                        <td>
                          <audio controls style={{ width: '80%' }}>
                            <source src={item.sound} type="audio/ogg" />
                            <source src={item.sound} type="audio/mpeg" />
                          </audio>
                        </td>
                        <td>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                            }}
                          >
                            {item.words.map((myword, myindex) => {
                              return (
                                <div key={myindex}>
                                  <div
                                    style={{
                                      flex: 1,
                                    }}
                                  >
                                    <div
                                      data-toggle="collapse"
                                      data-target="#demo"
                                    >
                                      <OverlayTrigger
                                        trigger="click"
                                        placement="top"
                                        overlay={popover}
                                        rootClose
                                      >
                                        <Button
                                          bsStyle="link"
                                          onClick={() =>
                                            this.setState({
                                              selectedWord: myword[0],
                                            })
                                          }
                                        >
                                          {myword[0]}
                                        </Button>
                                      </OverlayTrigger>
                                    </div>
                                  </div>
                                  <div
                                    style={{
                                      flex: 1,
                                      display: 'flex',
                                    }}
                                  >
                                    <OverlayTrigger
                                      trigger="click"
                                      placement="left"
                                      overlay={popover}
                                      rootClose
                                    >
                                      <Button
                                        bsStyle="link"
                                        onClick={() =>
                                          this.setState({
                                            selectedWord: myword[1],
                                          })
                                        }
                                      >
                                        {' '}
                                        {myword[1]}
                                      </Button>
                                    </OverlayTrigger>
                                  </div>
                                  <div
                                    style={{
                                      flex: 1,
                                      display: 'flex',
                                    }}
                                  >
                                    <OverlayTrigger
                                      trigger="click"
                                      placement="bottom"
                                      overlay={popover}
                                      rootClose
                                    >
                                      <Button
                                        bsStyle="link"
                                        onClick={() =>
                                          this.setState({
                                            selectedWord: myword[2],
                                          })
                                        }
                                      >
                                        {' '}
                                        {myword[2]}
                                      </Button>
                                    </OverlayTrigger>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BaseUnitTable;
