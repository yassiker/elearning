import React, { Component } from "react";
import avatar from "../assets/images/avatar5.png";
import { Link } from "react-router-dom";

import { translate } from "react-i18next";

class Header extends Component {
  changeLang = locale => {
    const { i18n } = this.props;
    i18n.changeLanguage(locale);
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
        <nav className="navbar navbar-static-top">
          {/* <div
            style={{
              backgroundColor: "red",
              position: "absolute",
              height: 50
            }}
          >
            <a
              data-toggle="offcanvas"
              role="button"
              style={{
                position: "absolute"
              }}
            >
              <span class="glyphicon glyphicon-menu-left" aria-hidden="true" />
            </a>
          </div> */}
          {this.props.writing ? (
            <Link to="/addUnitWriting" onClick={this.forceUpdate}>
              <button
                type="button"
                className="btn btn-default btn-circle"
                style={{
                  backgroundColor: "white",
                  marginTop: 10,
                  marginLeft: 10
                }}
              >
                <span
                  style={{ color: "green", fontSize: 15, fontWeight: "bold" }}
                >
                  Add Writing
                </span>
              </button>
            </Link>
          ) : null}
          {this.props.reading ? (
            <div style={{ position: "absolute" }}>
              <Link to="/addUntiReading" onClick={this.forceUpdate}>
                <button
                  type="button"
                  className="btn btn-default btn-circle"
                  style={{
                    backgroundColor: "white",
                    marginTop: 10,
                    marginLeft: 10
                  }}
                >
                  <span
                    style={{ color: "green", fontSize: 15, fontWeight: "bold" }}
                  >
                    Add Reading
                  </span>
                </button>
              </Link>
              <Link to="/addUntiReading" onClick={this.forceUpdate}>
                <button
                  type="button"
                  className="btn btn-default btn-circle"
                  style={{
                    backgroundColor: "white",
                    marginTop: 10,
                    marginLeft: 10
                  }}
                >
                  <span
                    style={{ color: "green", fontSize: 15, fontWeight: "bold" }}
                  >
                    Add Exercise
                  </span>
                </button>
              </Link>
            </div>
          ) : null}
          <div className="navbar-custom-menu">
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
