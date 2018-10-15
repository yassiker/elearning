import React, { Component } from "react";

import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
// import Image from "../assets/images/music.ico";

export class MapComponent extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={{ width: "100%", height: "100%" }}
        className={"map"}
      >
        <Marker onClick={this.onMarkerClick} name={"Current location"} />
        <Marker
          title={"The marker`s title will appear as a tooltip."}
          name={"SOMA"}
          position={{ lat: 37.778519, lng: -122.40564 }}
        />
        <Marker
          name={"Dolores park"}
          position={{ lat: 37.759703, lng: -122.428093 }}
        />
        <Marker />
        <Marker
          name={"Your position"}
          position={{ lat: 37.762391, lng: -122.439192 }}
          // icon={{
          //   url: Image
          // }}
          style={{ width: "10px", height: "10px" }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDXCHFExEeD_DHhHk3hfwZ3Mch7qqn1504"
})(MapComponent);
