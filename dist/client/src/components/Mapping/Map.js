"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_leaflet_1 = require("react-leaflet");
const leaflet_1 = __importDefault(require("leaflet"));
const Map = () => {
    let meIcon = leaflet_1.default.icon({
        iconUrl: '../../img/street-view.png',
        iconSize: [50, 50],
        iconAnchor: [25, 50],
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    return ((0, jsx_runtime_1.jsxs)(react_leaflet_1.MapContainer, Object.assign({ center: [50.562629, 5.597535], zoom: 16, scrollWheelZoom: true }, { children: [(0, jsx_runtime_1.jsx)(react_leaflet_1.TileLayer, { attribution: '\u00A9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" }), (0, jsx_runtime_1.jsx)(react_leaflet_1.Marker, Object.assign({ position: [50.562629, 5.597535], icon: meIcon }, { children: (0, jsx_runtime_1.jsxs)(react_leaflet_1.Popup, { children: ["A pretty CSS3 popup. ", (0, jsx_runtime_1.jsx)("br", {}), " Easily customizable."] }) }))] })));
};
exports.default = Map;
//# sourceMappingURL=Map.js.map