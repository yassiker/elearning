import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import cedarLogo from '../assets/images/cedfin.png';

class CultureContainer extends Component {
  render() {
    return (
      <div style={{ flex: 1, height: '100%' }}>
        <Header />
        <Sidebar updateDialog={this.updateUnitDialog} />
        <div
          style={{
            display: 'flex',
            flex: 1,
            height: '100%',
          }}
        >
          <div
            className="content-wrapper"
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <div
              style={{
                flex: 1,
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
                <img src={cedarLogo} alt="" style={{ height: '60px' }} />
              </div>
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  color: '#00a65a',
                }}
              >
                <h3 style={{ margin: 0 }}>Culture</h3>
              </div>
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <button className="btn btn-success">Text Here</button>
              </div>
            </div>

            <div
              style={{
                padding: '20px',
                flex: 7,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
              }}
            >
              <Link href="" to="/toponym" onClick={this.forceUpdate}>
                <div className="small-box bg-red">
                  <div className="inner">
                    <h3>Toponyms</h3>
                  </div>
                  <div className="icon">
                    <i className="ion-ios-location" />
                  </div>
                  <a className="small-box-footer">
                    More info <i className="fa fa-arrow-circle-right" />
                  </a>
                </div>
              </Link>
              <Link href="" to="/anthroContainer" onClick={this.forceUpdate}>
                <div className="small-box bg-green">
                  <div className="inner">
                    <h3>Anthroponyms</h3>
                  </div>
                  <div className="icon">
                    <i className="ion-ios-people-outline" />
                  </div>
                  <a className="small-box-footer">
                    More info <i className="fa fa-arrow-circle-right" />
                  </a>
                </div>
              </Link>

              <Link href="" to={`/lexicon/all`} onClick={this.forceUpdate}>
                <div className="small-box bg-orange">
                  <div className="inner">
                    <h3>Lexicon</h3>
                  </div>
                  <div className="icon">
                    <i className="ion-ios-book" />
                  </div>
                  <a className="small-box-footer">
                    More info <i className="fa fa-arrow-circle-right" />
                  </a>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CultureContainer;
