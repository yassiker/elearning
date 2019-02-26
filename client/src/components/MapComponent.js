import React, { Component } from "react";

import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapComponent extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={{ width: "100%", height: "100%" }}
        className={"map"}
        initialCenter={{
          lat: 33.523559,
          lng: -5.118424
        }}
      >
        {this.props.data &&
          this.props.data.map((item, index) => {
            return (
              <Marker
                title={"The marker`s title will appear as a tooltip."}
                name={"Ifrane"}
                position={{
                  lat: item.geo.lat,
                  lng: item.geo.lng
                }}
                key={index}
              />
            );
          })}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDXCHFExEeD_DHhHk3hfwZ3Mch7qqn1504"
})(MapComponent);
