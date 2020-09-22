import React from 'react'
//import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from "leaflet";
import Markers from "./markers.json";
const position = [42.7723478,-1.6272936]
const markers=Markers;

var IconRed = L.icon({
  iconUrl: 'marker3.png',
  shadowUrl: 'marker-shadow.png',
  iconSize:     [34, 40], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  shadowAnchor: [4, 62],  // the same for the shadow
  
});
var IconBlue = L.icon({
  iconUrl: 'marker-icon.png',
  shadowUrl: 'marker-shadow.png',
  iconSize:     [25, 40], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  //iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  //popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor 
  
});
let key=1;
const MapMarkers=()=>{
  return(
    markers.markers.map((marker)=>(
        <Marker key={key+=1} position={marker.position} icon={(marker.valor <= 100)?IconBlue:IconRed}>
            <Popup>
                {marker.title} <br/> {marker.text}<br/>{marker.valor} becquerelios 
            </Popup>
        </Marker>))
    );
};
const MapLeaflet = (
  <Map center={position} zoom={13}>
      <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <MapMarkers/>
  </Map>
);
export default MapLeaflet;