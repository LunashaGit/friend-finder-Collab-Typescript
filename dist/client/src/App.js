"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const framer_motion_1 = require("framer-motion");
const react_router_dom_1 = require("react-router-dom");
const Home_1 = __importDefault(require("./pages/Home"));
const theme = (0, styles_1.createTheme)({
    palette: {
        mode: "dark",
    },
});
const App = () => {
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsx)(styles_1.ThemeProvider, Object.assign({ theme: theme }, { children: (0, jsx_runtime_1.jsxs)(framer_motion_1.AnimatePresence, { children: [(0, jsx_runtime_1.jsx)(material_1.CssBaseline, {}), (0, jsx_runtime_1.jsx)(react_router_dom_1.Routes, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Home_1.default, {}) }) })] }) })) }));
};
exports.default = App;
//# sourceMappingURL=App.js.map