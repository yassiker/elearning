import React, { Component } from 'react';

import MapComponent from '../../components/MapComponent';
import cedarLogo from '../../assets/images/cedfin.png';

var wordList = [
  ['Ait Bechir'],
  ['Beni Mguild'],
  ['Beni Moussa'],
  ['Ait Ayache '],
  ['Ait Baamrane '],
  ['Ait Mribt'],
  ['other'],
  ['Ait Mribt'],
  ['Ait Mribt'],
  ['Ait Mribt'],
  ['Ait Mribt'],
  ['Ait Mribt'],
];

class TopoTemplate extends Component {
  render() {
    return (
      <div style={{ flex: 1, height: '100%' }}>
        <Header />
        <Sidebar material={material} updateDialog={this.updateUnitDialog} />
        <div
          className="content-wrapper"
          style={{
            display: 'flex',
            flex: 1,
          }}
        >
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div
              className="content-header"
              style={{
                borderBottom: '0px solid black',
                height: '57px',
                boxShadow: '0px 0px 10px #00a65a',
              }}
            >
              <a>
                <img
                  src={cedarLogo}
                  style={{ position: 'absolute', top: '-22px', left: '-30px' }}
                  alt=""
                />
              </a>
              <h1
                style={{ position: 'absolute', left: '44%', color: '#00a65a' }}
              >
                Toponym
              </h1>
              <button className="btn btn-success pull-right">Unit X</button>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'scroll',
                  padding: 10,
                  boxShadow: '0px 0px 10px 5px #00a65a',
                  margin: 10,
                }}
              >
                <input
                  className="form-control"
                  placeholder="Search"
                  name="srch-term"
                  id="srch-term"
                  type="text"
                  style={{ width: '100%' }}
                />
                {wordList.map((item, index) => {
                  return (
                    <a key={`${item}_${index}`}>
                      <li
                        className="list--list-item"
                        data-gender="Noun"
                        value={item}
                        name={item}
                      >
                        {' '}
                        <div className="col-md-12">
                          <div
                            className="box box-success collapsed-box"
                            style={{ margin: 10 }}
                          >
                            <div className="box-header with-border">
                              <h3 className="box-title name ">{item}</h3>
                            </div>
                          </div>
                        </div>
                      </li>
                    </a>
                  );
                })}
              </div>
              <div
                id="map"
                style={{
                  flex: 2,
                  display: 'flex',
                }}
              >
                <MapComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopoTemplate;
