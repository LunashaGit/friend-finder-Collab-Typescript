import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

type mapProps = {
  latitude: number;
  longitude: number;
};

const Map = ({ latitude, longitude }: mapProps) => {
  let meIcon = L.icon({
    iconUrl: "../../img/street-view.png",
    iconSize: [50, 50], // size of the icon
    iconAnchor: [25, 50], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  });

  // console.log(
  //   `Données reçues : Latitude =${latitude} & Longitude =${longitude}`
  // );

  type viewProps = {
    latitude: number;
    longitude: number;
    zoom: number;
  };

  const ChangeView = ({ latitude, longitude, zoom }: viewProps) => {
    const map = useMap();
    map.setView([latitude, longitude], zoom);
    return null;
  };

  return (
    <>
      <MapContainer
        center={[latitude, longitude]}
        zoom={16}
        scrollWheelZoom={true}
      >
        <ChangeView latitude={latitude} longitude={longitude} zoom={16} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]} icon={meIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};
Map.defaultProps = {
  latitude: 49.716167,
  longitude: 5.561081,
};
export default Map;
