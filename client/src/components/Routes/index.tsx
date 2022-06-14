import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./../../pages/Home";
import Navbar from "../Navbar";
import Profil from "./../../pages/profil";
import Trending from "./../../pages/trending";
import Spots from "../../pages/spots";

const index = () => {
  return (
    <BrowserRouter>
      <Navbar />      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/spots" element={<Spots />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
