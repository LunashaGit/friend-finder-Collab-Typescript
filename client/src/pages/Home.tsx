import Map from "../components/Mapping/Map";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Home = () => {
  const userData = useSelector((state: any) => state.userReducer);
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();

  useEffect(() => {
    if (Object.keys(userData).length) {
      setLatitude(userData.latitude);
      setLongitude(userData.longitude);
    }
  }, [userData]);

  return (
    <>
      <>
        <Map latitude={latitude} longitude={longitude} />
      </>
    </>
  );
};

export default Home;
