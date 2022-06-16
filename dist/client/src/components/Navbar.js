"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const AppContext_1 = require("./AppContext");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_router_dom_1 = require("react-router-dom");
const Logout_1 = __importDefault(require("./Log/Logout"));
const Navbar = () => {
    const uid = (0, react_1.useContext)(AppContext_1.UidContext);
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const userData = (0, react_redux_1.useSelector)((state) => state.userReducer);
    const location = (0, react_router_dom_1.useLocation)();
    let navBtn = "";
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
    const roads = [
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
    return ((0, jsx_runtime_1.jsxs)("nav", Object.assign({ className: `bg-primary shadow-md absolute left-2/4 -translate-x-2/4 w-screen z-10 max-w-xs md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-2xl w-full mx-auto py-3 mt-6 px-6 flex items-start md:items-center justify-between text-white drop-shadow-md` }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: "/" }, { children: (0, jsx_runtime_1.jsxs)("h1", Object.assign({ className: `text-2xl md:text-3xl text-white` }, { children: [(0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faUserGroup }), " Friend Finder"] })) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: `grow ${navBtn} items-center justify-end` }, { children: [(0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faGear, onClick: () => setIsOpen(!isOpen), className: "flex md:hidden text-3xl hover:animate-spin cursor-pointer" }), uid ? ((0, jsx_runtime_1.jsxs)("ul", Object.assign({ className: `${isOpen
                            ? "flex flex-col text-black absolute bg-white py-1.5 top-12 right-10 sm:relative sm:flex sm:flex-row sm:bg-transparent sm:top-0 sm:right-0 sm:text-white sm:justify-between sm:w-52"
                            : "hidden sm:relative sm:flex sm:justify-between"}` }, { children: [(0, jsx_runtime_1.jsxs)("li", Object.assign({ className: "text-xl px-3 py-1.5 flex flex-row" }, { children: [(0, jsx_runtime_1.jsx)("b", Object.assign({ className: "hidden sm:contents" }, { children: "Hello" })), " ", userData.pseudo] })), roads
                                .filter((road) => road.link !== "/signin" && road.link !== "/signup")
                                .map((road) => {
                                return ((0, jsx_runtime_1.jsx)("li", Object.assign({ className: "text-xl px-3 py-1.5" }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: road.link, onClick: () => setIsOpen(false) }, { children: road.icon ? road.icon : road.name })) }), road.id));
                            }), (0, jsx_runtime_1.jsx)(Logout_1.default, {})] }))) : ((0, jsx_runtime_1.jsx)("ul", Object.assign({ className: `${isOpen
                            ? "flex flex-col text-black absolute bg-white py-1.5 top-12 right-10 sm:relative sm:flex sm:flex-row sm:bg-transparent sm:top-0 sm:right-0 sm:text-white sm:justify-between sm:w-52"
                            : "hidden sm:relative sm:flex sm:justify-between sm:w-52"}` }, { children: roads
                            .filter((road) => road.link === "/signin" || road.link === "/signup")
                            .map((road) => {
                            return ((0, jsx_runtime_1.jsx)("li", Object.assign({ className: "text-xl px-3 py-1.5 sm:border-2 sm:rounded sm:shadow-md sm:font-bold" }, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: road.link, onClick: () => setIsOpen(false) }, { children: road.name })) }), road.id));
                        }) })))] }))] })));
};
exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map