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
const material_1 = require("@mui/material");
const RouteData_1 = require("./Routes/RouteData");
const Navbar = () => {
    const uid = (0, react_1.useContext)(AppContext_1.UidContext);
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const [isOpenBis, setIsOpenBis] = (0, react_1.useState)(false);
    const [notif, setNotif] = (0, react_1.useState)(true);
    const userData = (0, react_redux_1.useSelector)((state) => state.userReducer);
    const location = (0, react_router_dom_1.useLocation)();
    const roads = RouteData_1.RouteData;
    (0, react_1.useEffect)(() => {
        userData.friendRequestReceived ? setNotif(false) : setNotif(true);
    }, [notif, userData.friendRequestReceived]);
    return ((0, jsx_runtime_1.jsxs)("nav", Object.assign({ className: `bg-primary shadow-md left-2/4 -translate-x-2/4 w-full z-10 max-w-[260px] ml-6 md:ml-0 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-2xl mx-auto py-3 mt-6 px-6 flex items-center justify-between text-white drop-shadow-md ${location.pathname === "/profil" ? "fixed" : "absolute"}` }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: "/" }, { children: (0, jsx_runtime_1.jsxs)("h1", Object.assign({ className: `text-xl md:text-3xl text-white` }, { children: [(0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faUserGroup }), " Friend Finder"] })) })), roads && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: `grow flex items-center justify-end` }, { children: uid ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(material_1.Badge, Object.assign({ color: "secondary", overlap: "circular", badgeContent: " ", variant: "dot", invisible: notif }, { children: (0, jsx_runtime_1.jsx)(material_1.Avatar, { alt: "userPicture", src: userData.picture, className: "cursor-pointer", onClick: () => setIsOpen(!isOpen) }) })), isOpen && ((0, jsx_runtime_1.jsxs)("ul", Object.assign({ className: "absolute bg-white text-black w-60 right-12 top-12" }, { children: [(0, jsx_runtime_1.jsxs)("li", Object.assign({ className: "text-xl px-3 py-1.5 flex hover:bg-black/5 cursor-pointer", onClick: () => setIsOpenBis(!isOpenBis) }, { children: [(0, jsx_runtime_1.jsxs)("i", Object.assign({ className: "w-10 flex justify-center items-center text-primary" }, { children: [" ", (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCaretLeft }), " "] })), "Notifications", isOpenBis && ((0, jsx_runtime_1.jsx)("ul", Object.assign({ className: "absolute -left-1 -translate-x-full bg-white text-black w-40" }, { children: roads
                                                .filter((road) => road.show === "log")
                                                .map((road) => {
                                                return ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: road.link }, { children: (0, jsx_runtime_1.jsxs)("li", Object.assign({ className: "text-xl px-3 py-1.5 flex hover:bg-black/5 cursor-pointer" }, { children: [(0, jsx_runtime_1.jsxs)("i", Object.assign({ className: "w-10 flex justify-center items-center text-primary" }, { children: [" ", road.icon, " "] })), road.name] })) }), road.id));
                                            }) })))] })), roads
                                    .filter((road) => road.show === "log")
                                    .map((road) => {
                                    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: road.link }, { children: (0, jsx_runtime_1.jsxs)("li", Object.assign({ className: "text-xl px-3 py-1.5 flex hover:bg-black/5 cursor-pointer" }, { children: [(0, jsx_runtime_1.jsxs)("i", Object.assign({ className: "w-10 flex justify-center items-center text-primary" }, { children: [" ", road.icon, " "] })), road.name] })) }), road.id));
                                }), (0, jsx_runtime_1.jsx)(Logout_1.default, {})] })))] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faGear, onClick: () => setIsOpen(!isOpen), className: "text-3xl hover:animate-spin cursor-pointer" }), isOpen && ((0, jsx_runtime_1.jsx)("ul", Object.assign({ className: "absolute bg-white text-black w-60 right-12 top-12" }, { children: roads
                                .filter((road) => road.show === "noLog")
                                .map((road) => {
                                return ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: road.link }, { children: (0, jsx_runtime_1.jsxs)("li", Object.assign({ className: "text-xl px-3 py-1.5 flex hover:bg-black/5 cursor-pointer" }, { children: [(0, jsx_runtime_1.jsxs)("i", Object.assign({ className: "w-10 flex justify-center items-center text-primary" }, { children: [" ", road.icon, " "] })), road.name] })) }), road.id));
                            }) })))] })) })))] })));
};
exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map