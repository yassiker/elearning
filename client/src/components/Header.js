import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

import { translate } from "react-i18next";

class Header extends Component {
  changeLang = locale => {
    const { i18n } = this.props;
    i18n.changeLanguage(locale);
  };

  onChange = event => {
    this.props.onChangeValue(event);
  };

  render() {
    const { t } = this.props;
    return (
      <header className="main-header" style={{ borderWidth: 1, borderColor: "red" }}>
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
        <div
          style={{
            flex: 1,
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            borderBottomStyle: "solid",
            borderBottomColor: "#E3E6E8",
            borderBottomWidth: "1px",
            zIndex: 1
          }}
        >
          {!this.props.noHeader && (
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
              <i className="fa fa-search" aria-hidden="true" style={{ fontSize: 25, color: "#4dd0e1" }} />
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
          )}

          {!this.props.noHeader && (
            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "flex-end",
                marginRight: 10,
                margin: 5
              }}
            >
              <button className="btn btn-success">
                <Link to={`/tamazight/addWord/${null}`}>Add new Word</Link>
              </button>
            </div>
          )}
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center"
            }}
          />
          {this.props.navigations
            ? this.props.navigations.map((item, index) => {
                return (
                  <Button primary key={index} style={{ margin: 10 }}>
                    <Link to={item.path} onClick={this.forceUpdate}>
                      {item.key}
                    </Link>
                  </Button>
                );
              })
            : null}

          <div className="navbar-custom-menu" style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <ul className="nav navbar-nav">
              <li className="dropdown tasks-menu">
                <a className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-language" />
                  <span className="label label-danger">{t("userLanguage")}</span>
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
              {/* <li className="dropdown user user-menu">
                <a className="dropdown-toggle" data-toggle="dropdown">
                  <img src={avatar} className="user-image" alt="" />
                  <span className="hidden-xs">Yassine M'hanna</span>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default translate("common")(Header);
