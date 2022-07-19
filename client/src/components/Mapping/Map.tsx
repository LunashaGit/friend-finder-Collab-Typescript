import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { passions } from "./../HobbiesList";
import ModHobby from "./ModHobby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { Box, Button, Modal, Typography } from "@mui/material";

type mapProps = {
  latitude: number;
  longitude: number;
  zoom?: number;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Map = ({ latitude, longitude }: mapProps) => {
  const hobbies = useSelector((state: any) => state.spotsReducer);
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let meIcon = L.icon({
    iconUrl: "../../img/street-view.png",
    iconSize: [50, 50], // size of the icon
    iconAnchor: [25, 50], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  });

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
          <Popup>Ici c'est ton domicile !</Popup>
        </Marker>
        {Object.keys(hobbies).length &&
          hobbies.map((hobby: any) => {
            const icon: any = passions.find(
              (hobb) => hobb.name === hobby.hobbies[0]
            );
            let hobIcon = L.icon({
              iconUrl: `../../img/${icon.icon}`,
              iconSize: [30, 30], // size of the icon
              iconAnchor: [5, 50], // point of the icon which will correspond to marker's location
              popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
              shadowUrl: `../../img/spot.png`,
              shadowSize:   [80, 80],
              shadowAnchor: [30, 60],  // the same for the shadow
              
            });

            return (
              <div key={hobby._id}>
                <Marker
                  position={[hobby.latitude, hobby.longitude]}
                  icon={hobIcon}
                >
                  <Popup>
                    {hobby.hobbies[0]}{" "}
                    <FontAwesomeIcon
                      icon={faSquareArrowUpRight}
                      onClick={handleOpen}
                      className="cursor-pointer"
                    />
                  </Popup>
                </Marker>

                <Modal
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="keep-mounted-modal-title"
                  aria-describedby="keep-mounted-modal-description"
                >
                  <Box sx={style}>{hobby && <ModHobby hobby={hobby} />}</Box>
                </Modal>
              </div>
            );
          })}
      </MapContainer>
    </>
  );
};
Map.defaultProps = { // rue de Mulhouse 36 - 4000 Liège
  latitude: 50.632744,
  longitude: 5.586157,
};
export default Map;
