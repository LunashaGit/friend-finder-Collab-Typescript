import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AnimatePresence>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
