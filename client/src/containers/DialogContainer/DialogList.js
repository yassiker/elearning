import React, { Component } from 'react';
import cedarLogo from '../../assets/images/cedfin.png';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Link } from 'react-router-dom';
import { videos } from './constants';
import styles from './dialogStyles';

class DialogList extends Component {
  render() {
    return (
      <div style={{ flex: 1, height: '100%' }}>
        <Header />
        <Sidebar updateDialog={this.updateUnitDialog} />
        <div className="content-wrapper" style={styles.contentWrapper}>
          <div style={styles.content}>
            <div style={styles.cedarLogo}>
              <img src={cedarLogo} alt="" style={{ height: '60px' }} />
            </div>
            <div style={styles.list}>
              <h3 style={{ margin: 0 }}>List</h3>
            </div>
            <div
              style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'flex-end',
                marginRight: 5,
              }}
            >
              <button
                className="btn btn-success"
                onClick={() =>
                  this.setState({
                    showVideoList: true,
                  })
                }
              >
                <Link href="" to="/addDialog" onClick={this.forceUpdate}>
                  Add Video
                </Link>
              </button>
            </div>
          </div>
          <div style={{ flex: 7, flexDirection: 'column', display: 'flex' }}>
            <div
              id="products"
              className="row list-group"
              style={{ margin: 10, flex: 1 }}
            >
              {videos.map((item, index) => {
                return (
                  <div className="item  col-xs-4 col-lg-4" key={index}>
                    <div className="thumbnail">
                      <img
                        className="group list-group-image"
                        src={item.thumbnail}
                        alt=""
                      />
                      <div className="caption">
                        <h4
                          className="group inner list-group-item-heading"
                          style={{ paddingTop: 10 }}
                        >
                          Video title
                        </h4>
                        <p
                          className="group inner list-group-item-text"
                          style={{ paddingTop: 10 }}
                        >
                          Video description...
                        </p>
                        <div className="row">
                          <div className="col-xs-12 col-md-12">
                            <a
                              className="btn btn-success"
                              style={{ width: '100%' }}
                            >
                              Watch
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DialogList;
