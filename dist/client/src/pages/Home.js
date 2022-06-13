"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Map_1 = __importDefault(require("../components/Mapping/Map"));
const react_redux_1 = require("react-redux");
const Home = () => {
    const userData = (0, react_redux_1.useSelector)((state) => state.userReducer);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: Object.keys(userData).length && ((0, jsx_runtime_1.jsx)(Map_1.default, { latitude: userData.latitude, longitude: userData.longitude })) }) }));
};
exports.default = Home;
//# sourceMappingURL=Home.js.map