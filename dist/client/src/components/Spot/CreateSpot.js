"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const CssBaseline_1 = __importDefault(require("@mui/material/CssBaseline"));
const Paper_1 = __importDefault(require("@mui/material/Paper"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const Avatar_1 = __importDefault(require("@mui/material/Avatar"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const CenterFocusWeak_1 = __importDefault(require("@mui/icons-material/CenterFocusWeak"));
const TextField_1 = __importDefault(require("@mui/material/TextField"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const styles_1 = require("@mui/material/styles");
const material_1 = require("@mui/material");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const theme = (0, styles_1.createTheme)();
function CreateSpot() {
    const [spotName, setSpotName] = (0, react_1.useState)("");
    const [street, setStreet] = (0, react_1.useState)("");
    const [num, setNum] = (0, react_1.useState)("");
    const [postal, setPostal] = (0, react_1.useState)("");
    const [city, setCity] = (0, react_1.useState)("");
    let adresse = `${num} ${street}, ${city} ${postal}`;
    const [latitude, setLatitude] = (0, react_1.useState)("");
    const [longitude, setLongitude] = (0, react_1.useState)("");
    const [hobbies, setHobbies] = (0, react_1.useState)([]);
    const [description, setdescription] = (0, react_1.useState)("");
    const [creatorID, setCreatorID] = (0, react_1.useState)("");
    const [spotNameError, setSpotNameError] = (0, react_1.useState)(false);
    const [passwordError, setPasswordError] = (0, react_1.useState)(false);
    const params = {
        access_key: process.env.REACT_APP_API_POSITIONSTACK_TOKEN,
        query: { adresse },
        country: "BE",
    };
    const addSpot = (e) => {
        e.preventDefault();
        (0, axios_1.default)({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/spot/create`,
            withCredentials: true,
            data: {
                spotName, latitude, longitude, hobbies, description, creatorID
            },
        })
            .then((res) => {
            window.location.href = "/";
        })
            .catch((err) => {
            err.response.data.errors.spotName
                ? setSpotNameError(true)
                : setSpotNameError(false);
            err.response.data.errors.password
                ? setPasswordError(true)
                : setPasswordError(false);
        });
    };
    return ((0, jsx_runtime_1.jsx)(styles_1.ThemeProvider, Object.assign({ theme: theme }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "pt-24 h-screen" }, { children: [spotNameError && ((0, jsx_runtime_1.jsx)(material_1.Alert, Object.assign({ severity: "error", className: "text-center" }, { children: "Oups ! this spot already exist !" }))), passwordError && ((0, jsx_runtime_1.jsx)(material_1.Alert, Object.assign({ severity: "error", className: "text-center" }, { children: "Oups ! Wrong password !" }))), (0, jsx_runtime_1.jsxs)(Grid_1.default, Object.assign({ container: true, component: "main", sx: { height: "100%" } }, { children: [(0, jsx_runtime_1.jsx)(CssBaseline_1.default, {}), (0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ item: true, xs: 12, sm: 8, md: 5, component: Paper_1.default, elevation: 6, square: true }, { children: (0, jsx_runtime_1.jsxs)(Box_1.default, Object.assign({ sx: {
                                    my: 12,
                                    mx: 4,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                } }, { children: [(0, jsx_runtime_1.jsx)(Avatar_1.default, Object.assign({ sx: { m: 1, bgcolor: "primary.main" } }, { children: (0, jsx_runtime_1.jsx)(CenterFocusWeak_1.default, {}) })), (0, jsx_runtime_1.jsx)(Typography_1.default, Object.assign({ component: "h1", variant: "h5" }, { children: "Cr\u00E9er un nouveau spot" })), (0, jsx_runtime_1.jsxs)(Box_1.default, Object.assign({ component: "form", noValidate: true, onSubmit: addSpot, sx: { mt: 1 } }, { children: [(0, jsx_runtime_1.jsxs)(Grid_1.default, Object.assign({ container: true, spacing: 1 }, { children: [(0, jsx_runtime_1.jsx)(Grid_1.default, { item: true, xs: 12 }), (0, jsx_runtime_1.jsx)(TextField_1.default, { margin: "normal", required: true, fullWidth: true, onChange: (e) => setSpotName(e.target.value), value: spotName, id: "spotName", label: "nom du spot", name: "spotName", autoComplete: "spotName", autoFocus: true })] })), (0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ item: true, xs: 12, sm: 9 }, { children: (0, jsx_runtime_1.jsx)(TextField_1.default, { margin: "normal", fullWidth: true, required: true, id: "street", label: "Street", name: "street", autoComplete: "street", onChange: (e) => setStreet(e.target.value), value: street }) })), (0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ item: true, xs: 5, sm: 3 }, { children: (0, jsx_runtime_1.jsx)(TextField_1.default, { margin: "normal", fullWidth: true, required: true, id: "num", label: "N\u00B0", name: "num", autoComplete: "num", onChange: (e) => setNum(e.target.value), value: num }) })), (0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ item: true, xs: 7, sm: 4 }, { children: (0, jsx_runtime_1.jsx)(TextField_1.default, { margin: "normal", fullWidth: true, required: true, id: "postal", label: "Postal code", name: "postal", autoComplete: "postal", onChange: (e) => setPostal(e.target.value), value: postal }) })), (0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ item: true, xs: 12, sm: 8 }, { children: (0, jsx_runtime_1.jsx)(TextField_1.default, { margin: "normal", fullWidth: true, required: true, id: "city", label: "City", name: "city", autoComplete: "city", onChange: (e) => setCity(e.target.value), value: city }) })), (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ type: "submit", fullWidth: true, variant: "contained", sx: { mt: 3, mb: 2 } }, { children: "Cr\u00E9er mon spot" }))] }))] })) })), (0, jsx_runtime_1.jsx)(Grid_1.default, { item: true, xs: false, sm: 4, md: 7, sx: {
                                backgroundImage: "url(https://source.unsplash.com/random)",
                                backgroundRepeat: "no-repeat",
                                backgroundColor: (t) => t.palette.mode === "light"
                                    ? t.palette.grey[50]
                                    : t.palette.grey[900],
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            } })] }))] })) })));
}
exports.default = CreateSpot;
;
//# sourceMappingURL=CreateSpot.js.map