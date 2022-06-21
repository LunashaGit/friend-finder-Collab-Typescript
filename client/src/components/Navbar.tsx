import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UidContext } from "./AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faGear,
  faCaretLeft,
  faV,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logout from "./Log/Logout";
import { Avatar, Badge } from "@mui/material";
import { RouteData } from "./Routes/RouteData";
import { acceptFriend, deleteFriend } from "../actions/user.actions";

const Navbar = () => {
  const uid = useContext(UidContext);
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenBis, setIsOpenBis] = useState<boolean>(false);
  const [notif, setNotif] = useState<boolean>(true);
  const userData = useSelector((state: any) => state.userReducer);
  const allUsersData = useSelector((state: any) => state.usersReducer);
  const location = useLocation();
  const roads = RouteData;
  const boxNotifs: string[] = userData.friendRequestReceived;
  const dispatch = useDispatch();

  useEffect(() => {
    boxNotifs ? setNotif(false) : setNotif(true);
  }, [notif, boxNotifs]);

  useEffect(() => {
    const clickOut = (e: Event) => {
      if (isOpen && ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
        setIsOpenBis(false);
      }
    };
    document.addEventListener("mousedown", clickOut);
    return () => {
      document.addEventListener("mousedown", clickOut);
    };
  }, [isOpen]);

  const handleValidFriend = (idToAccept: any) => {
    dispatch<any>(acceptFriend(idToAccept, userData._id));
    dispatch<any>(deleteFriend(idToAccept, userData._id));
  };
  const handleDeleteFriend = (idToDelete: any) => {
    dispatch<any>(deleteFriend(idToDelete, userData._id));
  };

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
        <div ref={ref} className={`grow flex items-center justify-end`}>
          {uid ? (
            <>
              <Badge
                color="secondary"
                overlap="circular"
                badgeContent=" "
                variant="dot"
                invisible={notif}
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
                  <li
                    className="text-xl px-3 py-1.5 flex hover:bg-black/5 cursor-pointer"
                    onClick={() => setIsOpenBis(!isOpenBis)}
                  >
                    {" "}
                    <Badge
                      color="secondary"
                      badgeContent=" "
                      variant="dot"
                      invisible={notif}
                      className="w-full"
                    >
                      <i
                        className={`w-10 flex justify-center items-center text-primary ${
                          isOpenBis ? "-rotate-90" : ""
                        }`}
                      >
                        {" "}
                        <FontAwesomeIcon icon={faCaretLeft} />{" "}
                      </i>
                      Notifications
                    </Badge>
                    {isOpenBis && (
                      <ul className="absolute top-10 md:top-5 left-0 md:-left-1 md:-translate-x-full bg-white text-black ">
                        {boxNotifs &&
                          boxNotifs.map((usenotif) => {
                            let notifData = allUsersData.filter(
                              (user: any) => user._id === usenotif
                            );
                            let newNotif = notifData[0];
                            // console.log(newNotif);
                            return (
                              <li
                                key={newNotif._id}
                                className="text-lg md:text-xl px-3 py-1.5 flex items-center justify-between hover:bg-black/5"
                              >
                                <div className="flex items-center w-44 md:w-60 pr-3">
                                  <Avatar
                                    alt="userPicture"
                                    src={newNotif.picture}
                                    className="shadow-md"
                                  />
                                  <div className="ml-3 flex flex-col">
                                    <h4>
                                      {newNotif.firstName} {newNotif.lastName}
                                    </h4>
                                    <p className="hidden md:block text-sm italic">
                                      Want to be your friend
                                    </p>
                                  </div>
                                </div>
                                <div className="flex justify-between items-center w-16 ">
                                  <button
                                    onClick={() =>
                                      handleDeleteFriend(newNotif._id)
                                    }
                                    className="border-2 rounded-full p-1 w-6 h-6 flex justify-center items-center text-red shadow-md"
                                  >
                                    <FontAwesomeIcon
                                      icon={faX}
                                      className={`text-xs `}
                                    />
                                  </button>

                                  <button
                                    onClick={() =>
                                      handleValidFriend(newNotif._id)
                                    }
                                    className="border-2 rounded-full p-1 w-8 h-8 flex justify-center items-center text-green shadow-md"
                                  >
                                    <FontAwesomeIcon
                                      icon={faV}
                                      className={`text-base `}
                                    />
                                  </button>
                                </div>
                              </li>
                            );
                          })}
                      </ul>
                    )}
                  </li>

                  {roads
                    .filter((road) => road.show === "log")
                    .map((road) => {
                      return (
                        <Link to={road.link} key={road.id}>
                          <li className="text-xl px-3 py-1.5 flex hover:bg-black/5 cursor-pointer">
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
                        <Link to={road.link} key={road.id}>
                          <li className="text-xl px-3 py-1.5 flex hover:bg-black/5 cursor-pointer">
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
