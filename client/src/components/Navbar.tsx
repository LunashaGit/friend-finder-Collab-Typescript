import { useContext } from "react";
import { useSelector } from "react-redux";
import { UidContext } from "./AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faGear } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";
import Logout from "./Log/Logout";

const Navbar = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state: any) => state.userReducer);
  const location = useLocation();

  let navBtn: string = "";

  switch (location.pathname) {
    case "/signin":
      navBtn = "hidden";
      break;
    case "/signup":
      navBtn = "hidden";
      break;
    default:
      navBtn = "flex";
      break;
  }

  return (
    <nav
      className={`bg-primary shadow-md absolute left-2/4 -translate-x-2/4 w-screen z-10 max-w-xs md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-2xl w-full mx-auto py-3 mt-6 px-6 flex items-start md:items-center justify-between text-white drop-shadow-md`}
    >
      <NavLink to="/">
        <h1 className={`text-2xl md:text-3xl text-white`}>
          <FontAwesomeIcon icon={faUserGroup} /> Friend Finder
        </h1>
      </NavLink>
      {uid ? (
        <div className="flex items-center">
          <NavLink to="/spots">Spot</NavLink>
          <h3>hello {userData.pseudo}</h3>
          <Logout />
        </div>
      ) : (
        <div className={`grow ${navBtn} items-center justify-end`}>
          <NavLink to="/profil">
            <FontAwesomeIcon
              icon={faGear}
              className="flex md:hidden text-3xl hover:animate-spin cursor-pointer"
            />
          </NavLink>
          <div className="w-52 hidden md:flex justify-between">
            <NavLink to="/signin">
              <button className="border-2 px-3 py-1 text-lg rounded shadow-md font-bold">
                Sign in
              </button>
            </NavLink>
            <NavLink to="/signup">
              <button className="border-2 px-3 py-1 text-lg rounded shadow-md font-bold">
                Sign up
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
