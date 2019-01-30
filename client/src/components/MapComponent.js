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
          this.props.data.map(item => {
            return (
              <Marker
                title={"The marker`s title will appear as a tooltip."}
                name={"Ifrane"}
                position={{
                  lat: item.geo.lat,
                  lng: item.geo.lng
                }}
              />
            );
          })}

        {/* <Marker onClick={this.onMarkerClick} name={"Current location"} />
        <Marker
          title={"The marker`s title will appear as a tooltip."}
          name={"SOMA"}
          position={{ lat: 33.438170, lng: -5.230394 }}
        />
        <Marker
          name={"Dolores park"}
          position={{ lat: 37.759703, lng: -122.428093 }}
        />
        <Marker />
        <Marker
          name={"Your position"}
          position={{ lat: 37.762391, lng: -122.439192 }}
          style={{ width: "10px", height: "10px" }}
        /> */}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDXCHFExEeD_DHhHk3hfwZ3Mch7qqn1504"
})(MapComponent);
