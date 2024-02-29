import { renderToString } from "react-dom/server";
import { LayerGroup, LayersControl } from "react-leaflet";
import PixiOverlay from "react-leaflet-pixi-overlay";

export const LiveLayer = () => {
  const markers = [
    {
      id: "randomStringOrNumber",
      iconColor: "red",
      position: [-37.814, 144.96332],
      popup: renderToString(<div>All good!</div>),
      tooltip: "Hey!",
      customIcon:
        '<svg style="-webkit-filter: drop-shadow( 1px 1px 1px rgba(0, 0, 0, .4));filter: drop-shadow( 1px 1px 1px rgba(0, 0, 0, .4));" xmlns="http://www.w3.org/2000/svg" fill="red" width="36" height="36" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.342-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>',
    },
  ];

  return (
    <LayersControl.Overlay name="Markers" checked>
      <LayerGroup>
        <PixiOverlay markers={markers} />
      </LayerGroup>
    </LayersControl.Overlay>
  );
};
