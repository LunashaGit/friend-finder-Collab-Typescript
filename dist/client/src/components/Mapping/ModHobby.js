"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const ModHobby = ({ hobby }) => {
    console.log(hobby);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ id: "keep-mounted-modal-title", variant: "h6", component: "h2" }, { children: hobby.description })), (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ id: "keep-mounted-modal-description", sx: { mt: 2 } }, { children: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula." }))] }));
};
exports.default = ModHobby;
//# sourceMappingURL=ModHobby.js.map