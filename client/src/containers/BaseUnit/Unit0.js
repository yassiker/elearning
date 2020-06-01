import React, { Component } from 'react';

import cedarLogo from '../../assets/images/cedfin.png';
import LetterContainer from './LetterContainer';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import unitStyle from './unitStyle';

class BaseUnit extends Component {
  displayLetterList = () => {};
  render() {
    return (
      <div style={{ flex: 1, height: '100%' }}>
        <Header />
        <Sidebar updateDialog={this.updateUnitDialog} />
        <div className="content-wrapper" style={unitStyle.contentWrapper}>
          <div style={unitStyle.content}>
            <div style={unitStyle.logoContainer}>
              <div style={unitStyle.logoContent}>
                <img src={cedarLogo} alt="" style={{ height: '60px' }} />
              </div>
              <div style={unitStyle.pageTitle}>
                <h3 style={{ margin: 0 }}>Unit 0</h3>
              </div>
              <div style={unitStyle.letterList}>
                <button
                  className="btn btn-success"
                  onClick={this.displayLetterList}
                >
                  <Link href="" to="/letter" onClick={this.forceUpdate}>
                    See List
                  </Link>
                </button>
              </div>
            </div>
            <div style={unitStyle.letterContainer}>
              <div style={unitStyle.unitContent}>
                <LetterContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BaseUnit;
