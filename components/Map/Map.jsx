import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Map = () => {
  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const center = {
    lat: 49.5610133,
    lng: 17.2435892,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyASIo9nz-mTS1d3vsT5f-POrn63AvmtYAw">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17} />
    </LoadScript>
  );
};

export default Map;
