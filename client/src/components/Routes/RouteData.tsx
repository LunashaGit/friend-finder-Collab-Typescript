import {
  faArrowRightToBracket,
  faLocationDot,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const RouteData: {
  id: number;
  name: string;
  link: string;
  icon?: JSX.Element;
  show: string;
}[] = [
  {
    id: 1,
    name: "Login",
    link: "/signin",
    show: "noLog",
    icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
  },
  {
    id: 2,
    name: "Sign up",
    link: "/signup",
    show: "noLog",
    icon: <FontAwesomeIcon icon={faUserPlus} />,
  },
  {
    id: 4,
    name: "Profil",
    link: "/profil",
    show: "log",
    icon: <FontAwesomeIcon icon={faUser} />,
  },
  {
    id: 5,
    name: "Spots",
    link: "/spots",
    show: "log",
    icon: <FontAwesomeIcon icon={faLocationDot} />,
  },
];
