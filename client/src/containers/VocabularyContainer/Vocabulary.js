import React, { Component } from 'react';

import { Popover, OverlayTrigger, Button } from 'react-bootstrap';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Link } from 'react-router-dom';
import { vocabNavigations, words } from './constants';
import styles from './vocabStyle';

class Vocabulary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedWord: '',
    };
  }
  render() {
    const popover = (
      <Popover
        style={{ backgroundColor: 'skyblue' }}
        id="popover-positioned-left"
        title={
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 25,
              fontWeight: 'bold',
            }}
          >
            <strong>{this.state.selectedWord}</strong>
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
              justifyContent: 'space-around',
              padding: 10,
            }}
          >
            <Link
              href=""
              to={`/tamazight/addWord/${this.state.selectedWord}`}
              style={{ color: 'white' }}
              onClick={this.forceUpdate}
            >
              <i className="fa fa-edit" style={{ color: 'red', fontSize: 25 }} />
            </Link>

            <Link href="" to="/lexicon" style={{ color: 'white' }} onClick={this.forceUpdate}>
              <i className="fa fa-meanpath" style={{ color: 'rebeccapurple', fontSize: 25 }} />
            </Link>
          </div>
        </div>
      </Popover>
    );
    return (
      <div style={{ flex: 1, height: '100%' }}>
        <Header navigations={vocabNavigations} />
        <Sidebar updateDialog={this.updateUnitDialog} unitSection={'Word'} screenTitle={'Vocabulary'} />
        <div className="content-wrapper" style={styles.contentWrapper}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 7, display: 'flex', margin: 20 }}>
              <div
                style={{
                  flex: 7,
                  display: 'flex',
                  overflow: 'scroll',
                  justifyContent: 'center',
                }}
              >
                <table id="newexample" className="table table-striped table-bordered" style={styles.tableWrapper}>
                  <thead>
                    <tr>
                      <th>Tamazight</th>
                      <th>Arabic</th>
                      <th>Latin</th>
                      <th>Sound</th>
                    </tr>
                  </thead>
                  <tbody>
                    {words.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <OverlayTrigger trigger="click" placement="left" overlay={popover} rootClose>
                              <Button
                                bsStyle="link"
                                onClick={() =>
                                  this.setState({
                                    selectedWord: item.tifinagh,
                                  })
                                }
                              >
                                {item.tifinagh}
                              </Button>
                            </OverlayTrigger>
                          </td>
                          <td>{item.arabic}</td>
                          <td>{item.latin}</td>
                          <td>
                            <audio controls style={{ width: '80%' }}>
                              <source src={item.sound} type="audio/ogg" />
                              <source src={item.sound} type="audio/mpeg" />
                            </audio>
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
      </div>
    );
  }
}

export default Vocabulary;
