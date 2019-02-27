import React, { Component } from "react";
import avatar from "../assets/images/avatar5.png";
import { Link } from "react-router-dom";
import { Button, Icon, Input } from "semantic-ui-react";

import { translate } from "react-i18next";

class Header extends Component {
  changeLang = locale => {
    const { i18n } = this.props;
    i18n.changeLanguage(locale);
  };

  onChange = event => {
    console.log("event: " + event);
    this.props.onChangeValue(event);
  };

  render() {
    const { t } = this.props;
    return (
      <header className="main-header">
        <a className="logo">
          <span className="logo-mini">
            <b>A</b>
            UI
          </span>
          <span className="logo-lg">
            <b>LEARN</b>
            Tamazight
          </span>
        </a>
        <nav
          className="navbar navbar-static-top"
          style={{
            flex: 1,
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          {this.props.toponym ? (
            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "flex-start",
                color: "green",
                alignItems: "center",
                marginLeft: 10,
                borderBottom: "1px solid #4dd0e1",
                boxShadow: "0 1px 0 0 #4dd0e1",
                borderRadius: 25,
                margin: 5
              }}
            >
              <i
                className="fa fa-search"
                aria-hidden="true"
                style={{ fontSize: 25, color: "#4dd0e1" }}
              />
              <input
                className="form-control"
                type="text"
                placeholder="Type here"
                aria-label="Search"
                style={{
                  border: "none",
                  fontSize: 25,
                  fontWeight: "bold",
                  color: "red",
                  backgroundColor: "transparent"
                }}
                value={this.props.word}
                onChange={this.onChange}
              />
            </div>
          ) : null
          // <div
          //   style={{
          //     flex: 1,
          //     display: "flex",
          //     alignItems: "center",
          //     paddingLeft: 10
          //   }}
          // >
          //   <Input size="mini" icon="search" placeholder="Search..." />
          // </div>
          }
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {/* <Button icon labelPosition="right" color="twitter">
              Add
              <Icon name="plus square" />
            </Button> */}
          </div>
          {this.props.navigations
            ? this.props.navigations.map((item, index) => {
                return (
                  <Button primary key={index}>
                    <Link to={item.path} onClick={this.forceUpdate}>
                      Primary
                    </Link>
                  </Button>
                );
              })
            : null}

          <div
            className="navbar-custom-menu"
            style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}
          >
            <ul className="nav navbar-nav">
              <li className="dropdown tasks-menu">
                <a className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-language" />
                  <span className="label label-danger">
                    {t("userLanguage")}
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <ul className="menu">
                      <li onClick={() => this.changeLang("tm")}>
                        <a>
                          <h3>Tamazight</h3>
                        </a>
                      </li>
                      <li onClick={() => this.changeLang("ar")}>
                        <a>
                          <h3>{t("languageMenu.ar")}</h3>
                        </a>
                      </li>
                      <li onClick={() => this.changeLang("en")}>
                        <a>
                          <h3>{t("languageMenu.en")}</h3>
                        </a>
                      </li>
                      <li onClick={() => this.changeLang("fr")}>
                        <a>
                          <h3>{t("languageMenu.fr")}</h3>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown user user-menu">
                <a className="dropdown-toggle" data-toggle="dropdown">
                  <img src={avatar} className="user-image" alt="" />
                  <span className="hidden-xs">Yassine M'hanna</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default translate("common")(Header);
