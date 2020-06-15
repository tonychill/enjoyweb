/*
NO USE!!! DELETE THIS MODULE AFTER MAP WORKS!!!
*/

import { Component } from "react";
import ReactDOM from "react-dom";

export class Map extends Component {
  render() {
    return <div ref="map">Loading map...</div>;
  }
}

export default Map;

/*componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }
  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const { google } = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
    }
  }*/
