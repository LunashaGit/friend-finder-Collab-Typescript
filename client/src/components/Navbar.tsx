import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { UidContext } from "./AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faGear } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logout from "./Log/Logout";
import { Avatar, Badge } from "@mui/material";
import { RouteData } from "./Routes/RouteData";

const Navbar = () => {
  const uid = useContext(UidContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const userData = useSelector((state: any) => state.userReducer);
  const location = useLocation();
  const roads = RouteData;

  return (
    <nav
      className={`bg-primary shadow-md left-2/4 -translate-x-2/4 w-full z-10 max-w-[260px] ml-6 md:ml-0 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-2xl mx-auto py-3 mt-6 px-6 flex items-center justify-between text-white drop-shadow-md ${
        location.pathname === "/profil" ? "fixed" : "absolute"
      }`}
    >
      <NavLink to="/">
        <h1 className={`text-xl md:text-3xl text-white`}>
          <FontAwesomeIcon icon={faUserGroup} /> Friend Finder
        </h1>
      </NavLink>
      {roads && (
        <div className={`grow flex items-center justify-end`}>
          {uid ? (
            <>
              <Badge
                color="secondary"
                overlap="circular"
                badgeContent=" "
                variant="dot"
              >
                <Avatar
                  alt="userPicture"
                  src={userData.picture}
                  className="cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                />
              </Badge>
              {isOpen && (
                <ul className="absolute bg-white text-black w-60 right-12 top-12">
                  {roads
                    .filter((road) => road.show === "log")
                    .map((road) => {
                      return (
                        <Link to={road.link}>
                          <li
                            key={road.id}
                            className="text-xl px-3 py-1.5 flex hover:bg-black/5 cursor-pointer"
                          >
                            <i className="w-10 flex justify-center items-center text-primary">
                              {" "}
                              {road.icon}{" "}
                            </i>
                            {road.name}
                          </li>
                        </Link>
                      );
                    })}
                  <Logout />
                </ul>
              )}
            </>
          ) : (
            <>
              <FontAwesomeIcon
                icon={faGear}
                onClick={() => setIsOpen(!isOpen)}
                className="text-3xl hover:animate-spin cursor-pointer"
              />
              {isOpen && (
                <ul className="absolute bg-white text-black w-60 right-12 top-12">
                  {roads
                    .filter((road) => road.show === "noLog")
                    .map((road) => {
                      return (
                        <Link to={road.link}>
                          <li
                            key={road.id}
                            className="text-xl px-3 py-1.5 flex hover:bg-black/5 cursor-pointer"
                          >
                            <i className="w-10 flex justify-center items-center text-primary">
                              {" "}
                              {road.icon}{" "}
                            </i>
                            {road.name}
                          </li>
                        </Link>
                      );
                    })}
                </ul>
              )}
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
