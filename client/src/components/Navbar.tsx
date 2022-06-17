import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { UidContext } from "./AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faGear } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";
import Logout from "./Log/Logout";

const Navbar = () => {
  const uid = useContext(UidContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
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

  const roads: {
    id: number;
    name: string;
    link: string;
    icon?: JSX.Element;
  }[] = [
    {
      id: 1,
      name: "Sign In",
      link: "/signin",
    },
    {
      id: 2,
      name: "Sign up",
      link: "/signup",
    },
    {
      id: 3,
      name: "Profil",
      link: "/profil",
    },
    {
      id: 4,
      name: "Spots",
      link: "/spots",
    },
  ];
  return (
    <nav
      className={`bg-primary shadow-md absolute left-2/4 -translate-x-2/4 w-full z-10 max-w-[260px] ml-6 md:ml-0 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-2xl w-full mx-auto py-3 mt-6 px-6 flex items-start md:items-center justify-between text-white drop-shadow-md`}
    >
      <NavLink to="/">
        <h1 className={`text-2xl md:text-3xl text-white`}>
          <FontAwesomeIcon icon={faUserGroup} /> Friend Finder
        </h1>
      </NavLink>

      <div className={`grow ${navBtn} items-center justify-end`}>
        <FontAwesomeIcon
          icon={faGear}
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden text-3xl hover:animate-spin cursor-pointer"
        />

        {uid ? (
          <ul
            className={`${
              isOpen
                ? "flex flex-col text-black absolute bg-white py-1.5 top-12 right-10 sm:relative sm:flex sm:flex-row sm:bg-transparent sm:top-0 sm:right-0 sm:text-white sm:justify-between sm:w-52"
                : "hidden sm:relative sm:flex sm:justify-between"
            }`}
          >
            <li className="text-xl px-3 py-1.5 flex flex-row">
              <b className="hidden sm:contents">Hello</b> {userData.pseudo}
            </li>
            {roads
              .filter(
                (road) => road.link !== "/signin" && road.link !== "/signup"
              )
              .map((road) => {
                return (
                  <li key={road.id} className="text-xl px-3 py-1.5">
                    <NavLink to={road.link} onClick={() => setIsOpen(false)}>
                      {road.icon ? road.icon : road.name}
                    </NavLink>
                  </li>
                );
              })}
            <Logout />
          </ul>
        ) : (
          <ul
            className={`${
              isOpen
                ? "flex flex-col text-black absolute bg-white py-1.5 top-12 right-10 sm:relative sm:flex sm:flex-row sm:bg-transparent sm:top-0 sm:right-0 sm:text-white sm:justify-between sm:w-52"
                : "hidden sm:relative sm:flex sm:justify-between sm:w-52"
            }`}
          >
            {roads
              .filter(
                (road) => road.link === "/signin" || road.link === "/signup"
              )
              .map((road) => {
                return (
                  <li
                    key={road.id}
                    className="text-xl px-3 py-1.5 sm:border-2 sm:rounded sm:shadow-md sm:font-bold"
                  >
                    <NavLink to={road.link} onClick={() => setIsOpen(false)}>
                      {road.name}
                    </NavLink>
                  </li>
                );
              })}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
