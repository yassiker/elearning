import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import './Home.css';
import { units } from './homeConstants';
import homeStyles from './homeStyle';
import { connect } from 'react-redux';
import { selectUserRole } from '../../store/User/selectors';
import { People, Dictionary, Grammar, Places, Music, Interviews, Stories } from './constants';

type Props = {
  userRole: string,
};
class Home extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      top: 0,
      message: '',
    };
  }

  componentDidMount() {
    // this.getDataFromDb();
  }

  getDataFromDb = () => {
    fetch('/api/entities')
      .then((response) => response.json())
      .then((json) => this.setState({ message: json }));
  };

  render() {
    let bottom = 0;
    return (
      <div style={homeStyles.container}>
        <Header noHeader />
        <Sidebar updateDialog={this.updateUnitDialog} />
        <div className="content-wrapper" style={homeStyles.contentWrapper}>
          <div style={homeStyles.contentWrapper}>
            <section style={homeStyles.contentWrapper}>
              <div style={homeStyles.contentContainer}>
                <div className="distribution-map" style={homeStyles.contentWrapper}>
                  <div style={homeStyles.treeBackground}>
                    <div style={homeStyles.courseStructure}>
                      {units.map((unit, index) => {
                        bottom = bottom + 7.5;
                        return (
                          <button
                            key={index}
                            className="map-point"
                            style={{
                              bottom: `${bottom}%`,
                              left: '47.6%',
                              opacity: 1,
                            }}
                          >
                            <div className="content" style={homeStyles.unitContent}>
                              <div className="centered-y">
                                <h2 style={homeStyles.unitLink}>
                                  <Link href="" to={`/${unit.path}`} onClick={this.forceUpdate}>
                                    {unit.unit}
                                  </Link>
                                </h2>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <div className="verticalLine" style={homeStyles.unitContainer} />
                    <a style={homeStyles.unit}>
                      <p style={homeStyles.conceptText}>{Grammar}</p>
                    </a>
                    <Link href="" to={`/lexicon/all`} onClick={this.forceUpdate} style={homeStyles.dictionary}>
                      {Dictionary}
                    </Link>

                    <Link href="" to={`/toponym`} onClick={this.forceUpdate} style={homeStyles.places}>
                      {Places}
                    </Link>

                    <Link href="" to={`/anthroponym`} onClick={this.forceUpdate} style={homeStyles.people}>
                      {People}
                    </Link>
                    <a style={homeStyles.documentries}>
                      <p style={homeStyles.conceptText}>Documentaries</p>
                    </a>
                    <a style={homeStyles.interview}>
                      <p onClick={() => console.log('Interviews')} style={homeStyles.conceptText}>
                        {Interviews}
                      </p>
                    </a>
                    <a style={homeStyles.music}>
                      <p style={homeStyles.conceptText}>{Music}</p>
                    </a>
                    <a style={homeStyles.stories}>
                      <p style={homeStyles.conceptText}>{Stories}</p>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {};
};

const mapStateToProps = (state) => {
  return {
    userRole: selectUserRole()(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
