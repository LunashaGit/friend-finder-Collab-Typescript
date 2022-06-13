import Map from "../components/Mapping/Map";
import { useSelector } from "react-redux";

const Home = () => {
  const userData = useSelector((state: any) => state.userReducer);
  return (
    <>
      <>
        {Object.keys(userData).length && (
          <Map latitude={userData.latitude} longitude={userData.longitude} />
        )}
      </>
    </>
  );
};

export default Home;
