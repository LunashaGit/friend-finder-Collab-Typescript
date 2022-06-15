"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ListSpots_1 = __importDefault(require("./ListSpots"));
const CreateSpot_1 = __importDefault(require("./CreateSpot"));
const Spot = (props) => {
    const [listSpotsModal, setListSpotsModal] = (0, react_1.useState)(props.list);
    const [createSpotModal, setCreateSpotModal] = (0, react_1.useState)(props.create);
    const handleModals = (e) => {
        if (e.currentTarget.id === "create") {
            setListSpotsModal(false);
            setCreateSpotModal(true);
        }
        else if (e.currentTarget.id === "login") {
            setListSpotsModal(true);
            setCreateSpotModal(false);
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "connection-form" }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "form-container" }, { children: [(0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", Object.assign({ onClick: handleModals, id: "create", className: createSpotModal ? "active-btn" : "" }, { children: "Cr\u00E9er un spot" })), (0, jsx_runtime_1.jsx)("li", Object.assign({ onClick: handleModals, id: "list", className: listSpotsModal ? "active-btn" : "" }, { children: "Voir ses spots" }))] }), listSpotsModal && (0, jsx_runtime_1.jsx)(CreateSpot_1.default, {}), createSpotModal && (0, jsx_runtime_1.jsx)(ListSpots_1.default, {})] })) })));
};
exports.default = Spot;
//# sourceMappingURL=index.js.map