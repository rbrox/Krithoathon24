// client/src/components/LocationComponent.js
import React from "react";
import { geolocated } from "react-geolocated";

const LocationComponent = (props) => {
  if (!props.isGeolocationAvailable) {
    return <div>Your browser does not support Geolocation.</div>;
  } else if (!props.isGeolocationEnabled) {
    return <div>Geolocation is not enabled.</div>;
  } else if (props.coords) {
    // If coordinates are available, pass them to the parent component
    props.setCoords({
      latitude: props.coords.latitude,
      longitude: props.coords.longitude,
    });
    return (
      <div>
        <h2>Your Location</h2>
        <p>Latitude: {props.coords.latitude}</p>
        <p>Longitude: {props.coords.longitude}</p>
      </div>
    );
  } else {
    return <div>Getting the location data...</div>;
  }
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: 5000,
})(LocationComponent);
