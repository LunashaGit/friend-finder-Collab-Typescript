import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

type mapProps = {
  latitude: number;
  longitude: number;
};

const Map = ({ latitude, longitude }: mapProps) => {
  console.log(`lati = ${latitude} et long = ${longitude}`);

  let meIcon = L.icon({
    iconUrl: "../../img/street-view.png",
    iconSize: [50, 50], // size of the icon
    iconAnchor: [25, 50], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  });

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={16}
      scrollWheelZoom={true}
    >
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
  );
};

export default Map;
