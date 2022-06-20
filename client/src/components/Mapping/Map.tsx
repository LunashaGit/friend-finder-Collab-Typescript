import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {passions} from "./../HobbiesList"

type mapProps = {
  latitude: number;
  longitude: number;
  zoom?: number
};

const Map = ({ latitude, longitude }: mapProps) => {
const hobbies  = useSelector((state: any) => state.spotsReducer);

  let meIcon = L.icon({
    iconUrl: "../../img/street-view.png",
    iconSize: [50, 50], // size of the icon
    iconAnchor: [25, 50], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  })

  const ChangeView = ({ latitude, longitude, zoom }: mapProps) => {
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
            Ici c'est ton domicile !
          </Popup>
        </Marker>
        {Object.keys(hobbies).length && hobbies.map((hobby:any)=>{
          const icon:any = passions.find(hobb => hobb.name === hobby.hobbies[0])
            let hobIcon = L.icon({
              iconUrl: `../../img/${icon.icon}`,
              iconSize: [50, 50], // size of the icon
              iconAnchor: [25, 50], // point of the icon which will correspond to marker's location
              popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
            });
          
          return (
          <Marker position={[hobby.latitude, hobby.longitude]} icon={hobIcon} key={hobby._id}>
            <Popup>
            {hobby.hobbies[0]}
            </Popup>
          </Marker>
        )
        })}
        {/* {hobbies.map((hobby : any) => {
        <Marker position={[hobby.latitude, hobby.longitude]} icon={meIcon}>
          <Popup>
            Une super activité !
          </Popup>
        </Marker>
        })} */}

      </MapContainer>
    </>
  );
};
Map.defaultProps = {
  latitude: 50.632744,
  longitude: 5.586157,
};
export default Map;
