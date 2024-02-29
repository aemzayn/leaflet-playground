import { TileLayer, MapContainer, LayersControl } from "react-leaflet";
import { LiveLayer } from "./layers/liveLayer";
import "leaflet/dist/leaflet.css";
import "./App.css";
import { useState } from "react";
import generateMarkers from "./generateMarkers";
import ReactLeafletPixiOverlay from "react-leaflet-pixi-overlay";
import { marker } from "leaflet";

const App = () => {
  const center = [-37.814, 144.96332];
  const zoom = 18;

  const [switchsValue, setSwitchsValue] = useState({
    switch1: true,
    switch2: false,
  });

  const [markers] = useState({
    t1: generateMarkers(4000),
    t2: generateMarkers(4000),
  });

  function checkActivatedMarkers() {
    const { switch1, switch2 } = switchsValue;
    const { t1, t2 } = markers;
    if (switch1 && !switch2) {
      return t1;
    } else if (switch2 && !switch1) {
      return t2;
    } else if (switch1 && switch2) {
      return t1.concat(t2);
    }
  }

  return (
    <MapContainer
      zoom={zoom} // initial zoom required
      preferCanvas
      maxZoom={20} // required
      minZoom={3} // required
      center={center}
      className="map-container"
      // Other map props...
      attributionControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ReactLeafletPixiOverlay markers={checkActivatedMarkers()} />
      {/* <LayersControl>
        <LiveLayer />
      </LayersControl> */}
    </MapContainer>
  );
};

export default App;
