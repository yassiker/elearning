import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import cedarLogo from '../../assets/images/cedfin.png';

class AnthroContainer extends Component {
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
              <Link href="" to="/anthroponym/tribe" onClick={this.forceUpdate}>
                <div class="small-box bg-orange">
                  <div class="inner">
                    <a style={{ color: 'white' }}>
                      <h1>Tribe Names</h1>
                    </a>
                  </div>
                  <div class="icon">
                    <i class="fa fa-users" />
                  </div>
                  <div
                    style={{
                      background: 'rgba(0, 0, 0, 0.1)',
                      display: 'flex',
                      width: '100%',
                      height: '40px',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <a
                      href="addTamazightWord"
                      class="small-box-footer"
                      id="alink"
                    >
                      Add/Modify Tribe Name
                      <i
                        class="fa fa-arrow-circle-right"
                        style={{ paddingLeft: '10px' }}
                      />
                    </a>
                  </div>
                </div>
              </Link>

              <Link href="" to="/anthroponym/people" onClick={this.forceUpdate}>
                <div class="small-box bg-red">
                  <div class="inner">
                    <a style={{ color: 'white' }}>
                      <h1>People Names</h1>
                    </a>
                  </div>
                  <div class="icon">
                    <i class="fa fa-male" />
                  </div>
                  <div
                    style={{
                      background: 'rgba(0, 0, 0, 0.1)',
                      display: 'flex',
                      width: '100%',
                      height: '40px',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <a
                      href="addTamazightWord"
                      class="small-box-footer"
                      id="alink"
                    >
                      Add/Modify Tribe Name
                      <i
                        class="fa fa-arrow-circle-right"
                        style={{ paddingLeft: '10px' }}
                      />
                    </a>
                  </div>
                </div>
              </Link>
              <Link to="/anthroponym/animal" onClick={this.forceUpdate}>
                <div class="small-box bg-blue">
                  <div class="inner">
                    <a style={{ color: 'white' }}>
                      <h1>Animal Names</h1>
                    </a>
                  </div>
                  <div class="icon">
                    <i class="fa fa-paw" />
                  </div>
                  <div
                    style={{
                      background: 'rgba(0, 0, 0, 0.1)',
                      display: 'flex',
                      width: '100%',
                      height: '40px',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <a class="small-box-footer" id="alink">
                      Add/Modify Tribe Name
                      <i
                        class="fa fa-arrow-circle-right"
                        style={{ paddingLeft: '10px' }}
                      />
                    </a>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AnthroContainer;
