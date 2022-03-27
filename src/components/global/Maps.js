import { Button } from "antd";
import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useGeolocation } from "./useGeoLocation";

function Maps() {
  const [center, setCenter] = useState({ lat: -6.175, lng: 106.8283 });
  const ZOOM_LEVEL = 13;
  const location = useGeolocation();
  const [map, setMap] = useState(null);
  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      map.flyTo(
        [location.coordinates.lat, location.coordinates.lng],
        ZOOM_LEVEL,
        { animate: true }
      );
    }
  };

  return (
    <div>
      <MapContainer
        center={center}
        zoom={ZOOM_LEVEL}
        id="map"
        scrollWheelZoom={false}
        whenCreated={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {location.loaded && !location.error && (
          <Marker
            position={[location.coordinates.lat, location.coordinates.lng]}
          ></Marker>
        )}
      </MapContainer>
      <Button onClick={showMyLocation}>Locate Me</Button>
    </div>
  );
}

export default Maps;
