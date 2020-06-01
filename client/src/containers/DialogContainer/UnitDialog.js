import React, { Component } from 'react';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';

import { Radio } from 'react-bootstrap';

import Header from '../../components/Header';

const material = [
  {
    name: 'Dialog 1',
    videoSource: require('../../assets/videos/dialog1.mp4'),
  },
  {
    name: 'Dialog 2',
    videoSource: require('../../assets/videos/dialog2.mp4'),
  },
];

const dialogNavigations = [
  {
    key: 'Add Dialog',
    path: '/addDialog',
  },
  {
    key: 'Add Practice',
    path: '/addPractice',
  },
];
class UnitDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      disablePreviousButton: true,
      disableNextButton: false,
      showVideoList: false,
      unitVideos: [
        {
          title: 'videoTitle1',
          videoSource: 'source1',
        },
        {
          title: 'videoTitle2',
          videoSource: 'source2',
        },
      ],
      selectedVideo: material[0].name,
      videoSource: material[0].videoSource,
      key: 'dialog',
    };
  }

  updateUnitDialog = (dialog, position, key) => {
    this.setState({
      selectedVideo: dialog,
      position,
      videoSource: material[position].videoSource,
      key,
    });
  };

  renderReading = () => {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <ul className="sidebar-menu">
            <li
              className="header"
              style={{
                height: 57,
                backgroundColor: 'white',
                fontSize: 20,
                color: '#00a65a',
                display: 'flex',
                justifyContent: 'center',
                borderLeft: '3px solid red',
                borderRight: '3px solid #00a65a',
                margin: 0,
              }}
            >
              {'Unit'}
            </li>
            <li className="treeview">
              <a>
                <i className="fa fa-book" /> <span>Dialog</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li className="">
                  <a
                    onClick={() =>
                      this.setState({
                        videoSource: material[0].videoSource,
                        selectedVideo: material[0].name,
                      })
                    }
                  >
                    {' '}
                    <Radio name="radioGroup">Dialog 1</Radio>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      this.setState({
                        videoSource: material[1].videoSource,
                        selectedVideo: material[1].name,
                      })
                    }
                  >
                    <Radio name="radioGroup">Dialog 2</Radio>
                  </a>
                </li>
              </ul>
            </li>

            <li className="treeview">
              <a>
                <i className="fa fa-pencil" />
                <span>Practice</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li className="active">
                  <a>
                    <i className="fa fa-circle-o" /> Practice 1
                  </a>
                </li>
                <li>
                  <a>
                    <i className="fa fa-circle-o" /> Practice 1
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </aside>
    );
  };

  render() {
    return (
      <div style={{ flex: 1, height: '100%' }}>
        <Header navigations={dialogNavigations} />
        {this.renderReading()}
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
            <div
              style={{
                flex: 7,
                display: 'flex',
                padding: 10,
              }}
            >
              <div
                style={{
                  flex: 1,

                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
              <div
                style={{
                  flex: 7,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 10,
                }}
              >
                {this.state.key === 'dialog' ? (
                  <Player
                    playsInline
                    src={this.state.videoSource}
                    style={{ flex: 1 }}
                  />
                ) : (
                  <h3>"Put this dialogue into the right order." </h3>
                )}
              </div>
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UnitDialog;
