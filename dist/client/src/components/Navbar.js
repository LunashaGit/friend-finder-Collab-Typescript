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
    const userData = (0, react_redux_1.useSelector)((state) => state.userReducer);
    const location = (0, react_router_dom_1.useLocation)();
    let navBg = "";
    let navBtn = "";
    let navLogo = "";
    switch (location.pathname) {
        case "/signin":
            navBg = "relative";
            navBtn = "hidden";
            navLogo = "text-primary";
            break;
        case "/signup":
            navBg = "relative";
            navBtn = "hidden";
            navLogo = "text-primary";
            break;
        default:
            navBg = "bg-primary shadow-md absolute";
            navBtn = "flex";
            navLogo = "text-white";
            break;
    }
    return ((0, jsx_runtime_1.jsx)("nav", Object.assign({ className: `${navBg} w-screen` }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "max-w-xs md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-2xl w-full mx-auto py-6 px-3 sm:px-0 flex items-start md:items-center justify-between text-white drop-shadow-md" }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: "/" }, { children: (0, jsx_runtime_1.jsxs)("h1", Object.assign({ className: `text-2xl md:text-3xl ${navLogo}` }, { children: [(0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faUserGroup }), " Friend Finder"] })) })), uid ? ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("h3", { children: ["hello ", userData.pseudo] }), (0, jsx_runtime_1.jsx)(Logout_1.default, {})] })) : ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: `grow ${navBtn} items-center justify-end` }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: "/profil" }, { children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faGear, className: "flex md:hidden text-3xl hover:animate-spin cursor-pointer" }) })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "w-52 hidden md:flex justify-between" }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: "/signin" }, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ className: "border-2 px-3 py-1 text-lg rounded shadow-md font-bold" }, { children: "Sign in" })) })), (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: "/signup" }, { children: (0, jsx_runtime_1.jsx)("button", Object.assign({ className: "border-2 px-3 py-1 text-lg rounded shadow-md font-bold" }, { children: "Sign up" })) }))] }))] })))] })) })));
};
exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map