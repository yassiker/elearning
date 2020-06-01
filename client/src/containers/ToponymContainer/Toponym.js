import React, { Component } from 'react';

import MapComponent from '../../components/MapComponent';

import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import { Toponyms } from '../constants';

class ToponymContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      displayMap: false,
      selectedWord: [
        'ⴰⴼⵔⵉ',
        '(n, m)',
        'Naturally occurring cavity formed underground',
        'Cave',
        'cave.jpg',
      ],
    };
  }

  updateSearch = (event) => {
    this.setState({
      search: event.target.value.substr(0, 20),
    });
  };
  render() {
    let filteredWords = Toponyms.wordList.filter((item) => {
      return item.name.indexOf(this.state.search) !== -1;
    });

    return (
      <div style={{ flex: 1, height: '100%' }}>
        <Header
          onChangeValue={this.updateSearch}
          toponym
          word={this.state.search}
        />
        <Sidebar
          updateDialog={this.updateUnitDialog}
          screenTitle={'Toponyms'}
        />
        <div
          className="content-wrapper"
          style={{
            display: 'flex',
            flex: 1,
          }}
        >
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* <div
              style={{
                flex: 1,
                display: "flex",
                borderBottom: "0px solid black",
                boxShadow: "0px 0px 10px #00a65a",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "flex-end",
                  marginRight: 10
                }}
              >
                <button className="btn btn-success">
                  <Link to={`/tamazight/addWord/${null}`}>Add new Toponym</Link>
                </button>
              </div>
            </div> */}

            <div style={{ flex: 7, display: 'flex', flexDirection: 'row' }}>
              <ul
                className="box box-info"
                style={{
                  display: 'flex',
                  flex: 1,
                  flexDirection: 'column',
                  overflowY: 'scroll',
                  listStyle: 'none',
                  margin: 15,
                  alignItems: 'center',
                  padding: 0,
                }}
              >
                <h2>List</h2>
                {filteredWords.length > 0 ? (
                  filteredWords.map((item, index) => {
                    return (
                      <Link
                        href=""
                        to={`/add/${item.name}`}
                        key={index}
                        style={{ width: '100%' }}
                      >
                        <li
                          key={index}
                          className="list--list-item"
                          data-gender="Noun"
                          style={{ cursor: 'pointer', width: '100%' }}
                        >
                          <div className="col-md-12 ">
                            <div className="box box-success collapsed-box">
                              <div className="box-header with-border">
                                <h1
                                  className="box-title name"
                                  style={{ fontSize: '35px' }}
                                >
                                  {item.name}
                                </h1>
                              </div>
                            </div>
                          </div>
                        </li>
                      </Link>
                    );
                  })
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <i
                      className="fa fa-exclamation-triangle"
                      style={{
                        color: 'red',
                        display: 'flex',
                        justifyContent: 'center',
                        fontSize: 30,
                      }}
                    />
                    <p
                      style={{
                        color: 'red',
                        fontSize: 20,
                        fontWeight: 'bold',
                        padding: 25,
                        paddingTop: 5,
                      }}
                    >
                      Sorry, no resutls found. Type a new word or{' '}
                      <a style={{ color: 'aqua', cursor: 'pointer' }}>
                        click here
                      </a>{' '}
                      for suggestings
                    </p>
                  </div>
                )}
              </ul>

              <div
                id="map"
                style={{
                  flex: 3,
                  display: 'flex',
                  margin: 15,
                }}
              >
                <MapComponent
                  data={[
                    {
                      title: 'Ifrane',
                      geo: { lat: 33.523559, lng: -5.118424 },
                    },
                    {
                      title: 'Azeou',
                      geo: { lat: 33.43817, lng: -5.230394 },
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToponymContainer;
