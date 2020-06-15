import { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
class GoogleMapWrapper extends Component {
  state = {};
  render() {
    const style = {
      //height: "calc(100vh - 58px)"
      height: "300px",
    };
    if (!this.props.loaded) {
      return <div>Loading...</div>;
    }
    var points = [
      { lat: 18.02, lng: -64.01 },
      { lat: 18.03, lng: -64.02 },
      { lat: 18.03, lng: -64.04 },
      { lat: 18.05, lng: -64.02 },
    ];
    var bounds = new this.props.google.maps.LatLngBounds();
    for (var i = 0; i < points.length; i++) {
      bounds.extend(points[i]);
    }
    return (
      <div style={style}>
        <Map
          google={this.props.google}
          initialCenter={{
            lat: 18.373429,
            lng: -64.720111,
          }}
          zoom={12}
          bounds={bounds}
        >
          <Marker title={"The marker`s title will appear as a tooltip."} name={"SOMA"} position={{ lat: 18.373429, lng: -64.720111 }} />
        </Map>
      </div>
    );
  }
}
const LoadingContainer = (props) => <div>Fancy loading container!</div>;

export default GoogleApiWrapper({
  apiKey: process.env.G_MAPS_API_KEY,
  LoadingContainer: LoadingContainer,
})(GoogleMapWrapper);

/*import { Component } from "react";
//import { GoogleMap, Marker } from "react-google-maps";

export class MapContainer extends Component {
  render() {
    const style = {
      height: "100vh"
    };
    if (!this.props.loaded) {
      return <div>Loading...</div>;
    }
    return (
      <div style={style}>
        <Map google={this.props.google} />
      </div>
    );
  }
}

export default GoogleApiComponent({
  apiKey: "AIzaSyDcjgiQxSduKo8Vn_rmwkiq8Bto3mBd_zo"
})(MapContainer);
/*const Map = () => {
  return (
    <div>
      <h3>Google Maps</h3>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
      />
    </div>
  );
};
const MapWrapper = withScriptjs(withGoogleMap(map));

export default Map;
/*
{props.isMarkerShown && (
          <Marker position={{ lat: 18.397, lng: 64.644 }} />
        )}

*/
