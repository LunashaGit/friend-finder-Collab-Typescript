import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import cookie from "js-cookie";

const Logout = () => {
  const removeCookie = (key: string) => {
    if (typeof window !== "undefined") {
      cookie.remove(key, { expires: 1 });
    }
  };
  const logout = async () => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/user/logout`,
      withCredentials: true,
    })
      .then(() => {
        removeCookie("jwt");
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.href = "/";
  };
  return (
    <li onClick={logout} className="text-xl px-3 py-1.5 sm:text-white">
      <FontAwesomeIcon icon={faArrowRightFromBracket} />
    </li>
  );
};

export default Logout;
