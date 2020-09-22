import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div>
      <img 
      alt="Logo"
      src="marker3.png"
      style={{ height: "50px", width: "50px" }}
    />
  </div>
);
export default class Map extends Component {
  static defaultProps = {
    zoom: 13,
    center: {
        lat: 42.7725296,
        lng: -1.6276236
    }
  };

  render() {
    const mapStyles = {
        width: "100%",
        height: "100%"
      };
    return (
      <div
        className="google-map"
        style={{ width: "100%", height: "2000px", backgroundColor: "red" }}
      >
        <GoogleMapReact
        style={mapStyles}
          center={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={42.7725296}
            lng={-1.6276236}
            text="Geoactio Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}