import React, { Component } from "react";
import avatar from "../assets/images/avatar5.png";

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
          <a className="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span className="sr-only">Toggle navigation</span>
          </a>
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
