import React, { Component } from 'react';

import MapComponent from '../../components/MapComponent';

import ifrane from '../../assets/images/ifrane.png';

import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Button, Icon } from 'semantic-ui-react';

class ToponymItem extends Component {
  render() {
    return (
      <div style={{ flex: 1, height: '100%' }}>
        <Header />
        <Sidebar
          updateDialog={this.updateUnitDialog}
          screenTitle={this.props.match.params.id}
        />
        <div
          className="content-wrapper"
          style={{
            display: 'flex',
            flex: 1,
          }}
        >
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'row',
                padding: 20,
              }}
            >
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'scroll',
                  padding: 10,
                  boxShadow: '0px 0px 20px 2px grey',

                  margin: 10,
                }}
              >
                <div>
                  <img src={ifrane} alt="" />
                </div>

                <div
                  style={{
                    flex: 1,
                    overflow: 'scroll',
                    padding: 10,
                    marginBottom: 20,
                  }}
                >
                  <p style={{ fontSize: 16, margin: 0 }}>
                    Ifrane (Arabic: إفران‎; Berber: ⵉⴼⵔⴰⵏ) is a city in the
                    Middle Atlas region of Morocco (population 73,782 in
                    November 2014).[3] The capital of Ifrane Province in the
                    region of Fès-Meknès, Ifrane is located at an elevation of
                    1,665 m (5,463 ft).[1] In Tamazight, the regional Berber
                    language, "ifran" means caves. The modern town of Ifrane was
                    established by the French administration in 1928 during the
                    protectorate era for their administration due to its Alpine
                    climate. Ifrane was conceived as a “hill station” or
                    colonial type of settlement. It is a resort town set high up
                    in the mountains so that Europeans can find relief from the
                    summer heat of tropical colonies. Ifrane is also a popular
                    altitude training destination
                  </p>
                </div>

                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  {/* <button
                    type="button"
                    className="btn btn-primary pull-right"
                    style={{
                      margin: 0,
                      backgroundColor: "blue",
                      borderColor: "blue"
                    }}
                  >
                    <a
                      href="https://en.wikipedia.org/wiki/Ifrane"
                      target="_blank"
                      style={{ color: "white" }}
                      rel="noopener noreferrer"
                    >
                      Link to Wikipidea
                    </a>
                  </button> */}
                  <Button icon labelPosition="right" color="vk">
                    <a
                      href="https://en.wikipedia.org/wiki/Ifrane"
                      target="_blank"
                      style={{ color: 'white' }}
                      rel="noopener noreferrer"
                    >
                      Wikipidea
                    </a>
                    <Icon name="linkify" />
                  </Button>
                  {/* <button
                    type="button"
                    className="btn btn-primary pull-right"
                    style={{
                      margin: "0px",
                      marginRight: "10px",
                      marginBottom: "10px",
                      backgroundColor: "orange",
                      borderColor: "orange"
                    }}
                  >
                    <Link
                      to={`/lexicon/${this.props.match.params.id}`}
                      onClick={this.forceUpdate}
                    >
                      View on Lexicon
                    </Link>
                  </button> */}
                  <Button icon labelPosition="right" color="youtube">
                    <Link
                      to={`/lexicon/${this.props.match.params.id}`}
                      onClick={this.forceUpdate}
                    >
                      Lexicon
                    </Link>
                    <Icon name="arrow alternate circle right" />
                  </Button>
                </div>
              </div>
              <div
                id="map"
                style={{
                  flex: 1,
                  display: 'flex',
                  margin: 10,
                }}
              >
                <MapComponent
                  data={[
                    {
                      title: 'Ifrane',
                      geo: { lat: 33.523559, lng: -5.118424 },
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

export default ToponymItem;
