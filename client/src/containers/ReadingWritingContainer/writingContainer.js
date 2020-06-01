import React, { Component } from 'react';

import { translate } from 'react-i18next';

import Header from '../../components/Header';

const readings = [
  {
    title: 'First Reading',
    content:
      'A significant event in the history of acupuncture came in 1971, when a journalist from the New York Times had his appendix removed in China, when on a trip to the country with Henry Kissinger, the Secretary of State for the USA.',
  },
  {
    title: 'Second Reading',
    content: 'Second Content',
  },
];

class WritingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readingPos: 0,
      reading: true,
      previousDisabled: true,
      nextDisabled: false,
      section: 's',
    };
  }

  updateWriting = (index) => {
    this.setState({
      reading: false,
      readingPos: index,
    });
  };

  updateReading = (index) => {
    this.setState({
      readingPos: index,
      reading: true,
    });
  };

  showNextItem = () => {
    this.setState({
      previousDisabled: false,
    });
    if (this.state.readingPos === readings.length - 1) {
      this.setState({
        nextDisabled: true,
      });
    } else {
      this.setState({
        readingPos: this.state.readingPos + 1,
      });
    }
  };

  showPreviousItem = () => {
    this.setState({
      nextDisabled: false,
    });
    if (this.state.readingPos === 0) {
      this.setState({
        previousDisabled: true,
      });
    } else {
      this.setState({
        readingPos: this.state.readingPos - 1,
      });
    }
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
              {'Writing'}
            </li>
            <li className="treeview">
              <a
                style={{ cursor: 'pointer' }}
                onClick={() => this.setState({ section: 'writing' })}
              >
                <i className="fa fa-pencil" />
                <span>Writing</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right" />
                </span>
              </a>
              <ul className="treeview-menu">
                <li className="active">
                  <a onClick={() => this.updateWriting(0)}>
                    <i className="fa fa-circle-o" /> Writing 1
                  </a>
                </li>
                <li>
                  <a onClick={() => this.updateWriting(1)}>
                    <i className="fa fa-circle-o" /> Practice 1
                  </a>
                </li>
              </ul>
            </li>

            {this.props.material
              ? this.props.material.map((item, index) => {
                  return (
                    <li
                      className={
                        index === 0
                          ? `treeview active`
                          : `treeview ${this.state.active}`
                      }
                      key={index}
                      style={{
                        background: this.myColor(index),
                        cursor: 'pointer',
                      }}
                      onClick={() => {
                        this.toggle(index, item.name, 'dialog');
                      }}
                    >
                      <a
                        style={{
                          color: 'black',
                          background: this.myColor(index),
                        }}
                      >
                        <span>{item.name}</span>
                      </a>
                    </li>
                  );
                })
              : null}

            {this.props.practiceSet
              ? this.props.practiceSet.map((item, index) => {
                  return (
                    <li
                      className={`treeview ${this.state.active}`}
                      key={index}
                      style={{
                        background: this.myColor(index),
                        cursor: 'pointer',
                      }}
                      onClick={() => {
                        this.toggle(index, item.name, 'practice');
                      }}
                    >
                      <a
                        style={{
                          color: 'black',
                          background: this.myColor(index),
                        }}
                      >
                        <span>{item.name}</span>
                      </a>
                    </li>
                  );
                })
              : null}
          </ul>
        </section>
      </aside>
    );
  };

  renderReadingSection = () => {
    const { t } = this.props;
    return (
      <div>
        <h2 style={{ color: '', fontWeight: 'bold' }}>
          {readings[this.state.readingPos].title}
        </h2>
        <div
          style={{
            flex: 8,
            display: 'flex',
            padding: '20px',
            overflow: 'scroll',
            boxShadow: '0px 0px 10px #00a65a',
            margin: 10,
          }}
        >
          <p style={{ fontSize: 20 }}>
            {readings[this.state.readingPos].content}
          </p>
        </div>
        <div
          style={{
            flex: 1,
            display: 'flex',
            padding: '20px',
            justifyContent: 'space-between',
            margin: 10,
          }}
        >
          <button
            style={{
              visibility: this.state.previousDisabled ? 'hidden' : 'visible',
            }}
            className="btn btn-warning"
            type="button"
            onClick={this.showPreviousItem}
          >
            {t('previousArticle')}
          </button>

          {!this.state.nextDisabled && (
            <button
              className="btn btn-danger"
              type="button"
              onClick={this.showNextItem}
            >
              {t('nextArticle')}
            </button>
          )}
        </div>
      </div>
    );
  };

  renderWritingSection = () => {
    return (
      <div
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    );
  };

  render() {
    return (
      <div style={{ flex: 1, height: '100%' }}>
        <Header writing={true} />
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
              flexDirection: 'row',
              padding: 25,
            }}
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
                  alignItems: 'center',
                  padding: 10,
                  marginBottom: 10,
                }}
              >
                {this.state.section === 'reading'
                  ? this.renderReadingSection()
                  : this.renderWritingSection()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default translate('common')(WritingContainer);
