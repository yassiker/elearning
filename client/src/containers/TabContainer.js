import React, { Component } from "react";

import cedarLogo from "../assets/images/cedfin.png";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import { Tabs, Tab, Panel, PanelGroup } from "react-bootstrap";

class TabContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      activeKey: "1",
      activeVideoKey: "1"
    };
  }

  handleSelect = activeKey => {
    this.setState({ activeKey });
  };

  handleVideoSelect = activeVideoKey => {
    this.setState({
      activeVideoKey
    });
  };

  render() {
    return (
      <div style={{ flex: 1, height: "100%" }}>
        <Header />
        <Sidebar updateDialog={this.updateUnitDialog} />
        <div
          className="content-wrapper"
          style={{
            display: "flex",
            flex: 1
          }}
        >
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <div
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
                  color: "#00a65a"
                }}
              >
                <img src={cedarLogo} alt="" style={{ height: "60px" }} />
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  color: "#00a65a"
                }}
              >
                <h3 style={{ margin: 0 }}>Tabs Tester</h3>
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "flex-end"
                }}
              >
                <button className="btn btn-success">Text Here</button>
              </div>
            </div>

            <div style={{ flex: 7, display: "flex", padding: 20 }}>
              <Tabs
                defaultActiveKey={1}
                id="uncontrolled-tab-example"
                style={{
                  flex: 1,
                  display: "flex",
                  width: 100,
                  flexDirection: "column"
                }}
              >
                <Tab
                  eventKey={1}
                  title="Lesson"
                  style={{
                    flex: 1
                  }}
                >
                  <PanelGroup
                    accordion
                    id="accordion-controlled-example"
                    activeKey={this.state.activeVideoKey}
                    onSelect={this.handleVideoSelect}
                  >
                    <Panel eventKey="1">
                      <Panel.Heading>
                        <Panel.Title toggle>First Lesson</Panel.Title>
                      </Panel.Heading>
                      <Panel.Body collapsible>Panel content 1</Panel.Body>
                    </Panel>
                    <Panel eventKey="2">
                      <Panel.Heading>
                        <Panel.Title toggle>Second Lesson</Panel.Title>
                      </Panel.Heading>
                      <Panel.Body collapsible>Panel content 2</Panel.Body>
                    </Panel>
                  </PanelGroup>
                </Tab>
                <Tab eventKey={2} title="Video Lesson">
                  <PanelGroup
                    accordion
                    id="accordion-controlled-example"
                    activeKey={this.state.activeKey}
                    onSelect={this.handleSelect}
                  >
                    <Panel eventKey="1">
                      <Panel.Heading>
                        <Panel.Title toggle>Video Lesson 1</Panel.Title>
                      </Panel.Heading>
                      <Panel.Body collapsible>Panel content 1</Panel.Body>
                    </Panel>
                    <Panel eventKey="2">
                      <Panel.Heading>
                        <Panel.Title toggle>Video Lesson 2</Panel.Title>
                      </Panel.Heading>
                      <Panel.Body collapsible>Panel content 2</Panel.Body>
                    </Panel>
                  </PanelGroup>
                </Tab>
                <Tab eventKey={3} title="Exercises" style={{ flex: 1 }}>
                  <PanelGroup
                    accordion
                    id="accordion-controlled-example"
                    activeKey={this.state.activeKey}
                    onSelect={this.handleSelect}
                  >
                    <Panel eventKey="1">
                      <Panel.Heading style={{}}>
                        <Panel.Title toggle>First Execrise</Panel.Title>
                      </Panel.Heading>
                      <Panel.Body collapsible>Panel content 1</Panel.Body>
                    </Panel>
                    <Panel eventKey="2">
                      <Panel.Heading style={{}}>
                        <Panel.Title toggle>Second Execrise</Panel.Title>
                      </Panel.Heading>
                      <Panel.Body collapsible>
                        Panel content 2{" "}
                        <button
                          onClick={() =>
                            this.setState({
                              activeKey: "1"
                            })
                          }
                        >
                          Previous
                        </button>
                      </Panel.Body>
                    </Panel>
                  </PanelGroup>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TabContainer;
