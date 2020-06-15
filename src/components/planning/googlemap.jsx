import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const Marker = ({ text }) => (
  <div>
    <img height="35" width="35" src="/media/active-icons/map.svg"></img>
  </div>
);

class GoogleMap extends Component {
  static defaultProps = {
    zoom: 11,
  };
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "350px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.G_MAPS_API_KEY,
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker lat={this.props.center.lat} lng={this.props.center.lng} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
