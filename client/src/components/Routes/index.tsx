import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./../../pages/Home";
import Navbar from "../Navbar";
import Profil from "./../../pages/profil";
import Spots from "../../pages/spots";
import SignInSide from "../../pages/signin";
import SignUpSide from "../../pages/signup";
import { useContext } from "react";
import { UidContext } from "../AppContext";

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const uid = useContext(UidContext);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {uid && <Route path="/profil" element={<Profil />} />}
        {!uid && <Route path="/signin" element={<SignInSide />} />}
        {!uid && <Route path="/signup" element={<SignUpSide />} />}
        <Route path="/spots" element={<Spots />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
