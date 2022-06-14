import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./../../pages/Home";
import Navbar from "../Navbar";
import Profil from "./../../pages/profil";
import Trending from "./../../pages/trending";
import SignInSide from "../../pages/signin";
import SignUpSide from "../../pages/signup";

const index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/signin" element={<SignInSide />} />
        <Route path="/signup" element={<SignUpSide />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
