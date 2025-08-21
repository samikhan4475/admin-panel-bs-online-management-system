import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "8px",
};

const center = {
  lat: 31.57342,
  lng: 74.30367,
};

const MyComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAc8gk7qNtsjTFl1VlPVX2b5yMQI-qm6S8",
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <p>Loading...</p>
  );
};

export default React.memo(MyComponent);
