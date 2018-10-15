import React, { Component } from "react";

import { translate } from "react-i18next";

import { Link } from "react-router-dom";

class ReadingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          title: "Reading Title",
          content: "Long text"
        }
      ]
    };
  }

  render() {
    const { t } = this.props;

    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          padding: 25
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
              marginBottom: 10
            }}
          >
            <h2 style={{ color: "", fontWeight: "bold" }}>
              {this.state.articles[0].title}
            </h2>
            <button
              type="button"
              className="btn btn-default btn-circle"
              style={{
                width: "80px",
                height: "80px",
                padding: "6px 0px",
                borderRadius: "40px",
                textAlign: "center",
                fontSize: "12px",
                lineHeight: "1.42857",
                backgroundColor: "red"
              }}
            >
              <span
                style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
              >
                {t("edit")}{" "}
              </span>
            </button>
          </div>

          <div
            style={{
              flex: 8,
              display: "flex",
              padding: "20px",
              overflow: "scroll",
              boxShadow: "0px 0px 10px #00a65a",
              margin: 10
            }}
          >
            <p style={{ fontSize: 20 }}>
              A significant event in the history of acupuncture came in 1971,
              when a journalist from the New York Times had his appendix removed
              in China, when on a trip to the country with Henry Kissinger, the
              Secretary of State for the USA. Surgeons used acupuncture to
              deaden the pain of the operation, which greatly impressed
              Kissinger. Although at first doctors in the West were often
              sceptical of the medical value of acupuncture, in the last few
              years it has become more established as an alternative to Western
              medical treatments, since clinical tests have shown that
              acupuncture is effective for a number of conditions. What can
              acupuncture be used to treat? In the Far East acupuncture is used
              to treat a wide range of complaints, and is also used as a
              preventative medicine, since it is thought to increase the body’s
              resistance to infection. In the West, the treatment is often used
              to relieve headaches, dental pain, back pain and arthritis, and to
              treat depression, asthma, stress, high blood pressure and anxiety.
              Who uses acupuncture? Since acupuncture is known to be effective
              against pain, it is not surprising that many sportspeople have
              experimented with acupuncture when fighting injury. Martina
              Hingis, the famous tennis player, had a wrist injury cured through
              treatment, and English Premier Division football club Bolton
              Wanderers employs an acupuncturist to keep its squad in good
              physical condition. While in Korea for the World Cup in 2002,
              soojichim, a Korean form of acupuncture, was very popular with the
              German football team. Cherie Blair, a well-known human rights
              lawyer and the wife of the British Prime Minister, was recently
              spotted wearing an acupuncture needle in her ear, suggesting that
              she uses the treatment to cope with stress. The Queen of the
              United Kingdom is also interested in acupuncture, although she
              doesn’t use the treatment herself – she and many of her family
              rely on another alternative medical treatment, homeopathy, to keep
              them healthy.
            </p>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              padding: "20px",
              justifyContent: "space-between",
              margin: 10
            }}
          >
            <button className="btn btn-warning" type="button">
              {t("previousArticle")}
            </button>

            <button className="btn btn-danger" type="button">
              {t("nextArticle")}
            </button>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            borderLeft: "7px solid green",
            borderRadius: "25px",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <h2 style={{ color: "", fontWeight: "bold" }}>{"Practice"}</h2>
          </div>
          <div
            style={{
              flex: 11,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <button
              type="button"
              className="btn btn-default btn-circle"
              style={{
                width: "150px",
                height: "150px",
                padding: "6px 0px",
                borderRadius: "75px",
                textAlign: "center",
                fontSize: "12px",
                lineHeight: "1.42857",
                backgroundColor: "red"
              }}
            >
              <Link to="/addUntiReading" onClick={this.forceUpdate}>
                <span
                  style={{ color: "white", fontSize: 50, fontWeight: "bold" }}
                >
                  {"+"}
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default translate("common")(ReadingContainer);
