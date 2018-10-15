import React, { Component } from "react";
import { Link } from "react-router-dom";

class CultureContainer extends Component {
  render() {
    return (
      <section className="content-wrapper" style={{ height: "84%" }}>
        <section
          className="content"
          style={{
            height: "621px",
            background: "url(dist/img/boxed-bg.jpg) repeat fixed"
          }}
        >
          <div className="row" style={{ padding: "20px", height: "100%" }}>
            <section className="col-lg-6 connectedSortable ui-sortable">
              <div className="col-lg-3 col-xs-6">
                <div className="small-box bg-yellow">
                  <div className="inner">
                    <Link to="/unit0">Unit0</Link>
                  </div>
                  <div className="icon">
                    <i className="ion-ios-people-outline" />
                  </div>
                  <a className="small-box-footer">
                    More info <i className="fa fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-xs-6">
                <div className="small-box bg-green">
                  <div className="inner">
                    <h3>Lexicon</h3>
                  </div>
                  <div className="icon">
                    <i className="ion-ios-book" />
                  </div>
                  <a className="small-box-footer">
                    More info <i className="fa fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-xs-6">
                <div className="small-box bg-orange">
                  <div className="inner">
                    <h3>Pronunciation</h3>
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag" />
                  </div>
                  <a className="small-box-footer">
                    More info <i className="fa fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
            </section>
            <section className="col-lg-6 connectedSortable ui-sortable">
              <div className="col-lg-3 col-xs-6">
                <div className="small-box bg-aqua">
                  <div className="inner">
                    <h3>Grammar</h3>
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag" />
                  </div>
                  <a className="small-box-footer">
                    More info <i className="fa fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-xs-6">
                <div className="small-box bg-red">
                  <div className="inner">
                    <h3>Reading and Writing</h3>
                  </div>
                  <div className="icon">
                    <i className="ion-ios-book-outline" />
                  </div>
                  <a className="small-box-footer">
                    More info <i className="fa fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-xs-6">
                <div className="small-box bg-blue">
                  <div className="inner">
                    <h3>Culture</h3>
                  </div>
                  <div className="icon">
                    <i className="ion-ios-book-outline" />
                  </div>
                  <a className="small-box-footer">
                    More info <i className="fa fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
            </section>
          </div>
        </section>
      </section>
    );
  }
}

export default CultureContainer;
