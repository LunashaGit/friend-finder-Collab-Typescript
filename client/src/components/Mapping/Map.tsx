import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const Map  = () => {

    let meIcon = L.icon({
        iconUrl: '../../img/street-view.png',
        iconSize:     [50, 50], // size of the icon
        iconAnchor:   [25, 50], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    })

    return (
        <MapContainer center={[50.562629, 5.597535]} zoom={16} scrollWheelZoom={true}>
          <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[50.562629, 5.597535]} icon={meIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
        </MapContainer>
      );
}

export default Map