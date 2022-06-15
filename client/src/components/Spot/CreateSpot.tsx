import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Alert } from "@mui/material";

import axios from "axios";
import React, { useState } from "react";

const theme = createTheme();

export default function CreateSpot() {
  const [spotName, setSpotName] = useState("");
  const [street, setStreet] = useState<string>("");
  const [num, setNum] = useState<string>("");
  const [postal, setPostal] = useState<string>("");
  const [city, setCity] = useState<string>("");
  let adresse: string = `${num} ${street}, ${city} ${postal}`;
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [hobbies, setHobbies] = useState ([]);
  const [description, setdescription] = useState ("");
  const [creatorID, setCreatorID] = useState ("");

  const [spotNameError, setSpotNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const params = {
    access_key: process.env.REACT_APP_API_POSITIONSTACK_TOKEN,
    query: { adresse },
    country: "BE",
  };

  const addSpot = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios({
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
  return (
    <ThemeProvider theme={theme}>
      <div className="pt-24 h-screen">
        {spotNameError && (
          <Alert severity="error" className="text-center">
            Oups ! this spot already exist !
          </Alert>
        )}

        {passwordError && (
          <Alert severity="error" className="text-center">
            Oups ! Wrong password !
          </Alert>
        )}
        <Grid container component="main" sx={{ height: "100%" }}>
          <CssBaseline />

          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 12,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                <CenterFocusWeakIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Créer un nouveau spot
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={addSpot}
                sx={{ mt: 1 }}
              >
                <Grid container spacing={1}>
                  <Grid item xs={12}></Grid>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      onChange={(e) => setSpotName(e.target.value)}
                      value={spotName}
                      id="spotName"
                      label="nom du spot"
                      name="spotName"
                      autoComplete="spotName"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <TextField
                      margin="normal"
                      fullWidth
                      required
                      id="street"
                      label="Street"
                      name="street"
                      autoComplete="street"
                      onChange={(e) => setStreet(e.target.value)}
                      value={street}
                    />
                  </Grid>
                  <Grid item xs={5} sm={3}>
                    <TextField
                      margin="normal"
                      fullWidth
                      required
                      id="num"
                      label="N°"
                      name="num"
                      autoComplete="num"
                      onChange={(e) => setNum(e.target.value)}
                      value={num}
                    />
                  </Grid>
                  <Grid item xs={7} sm={4}>
                    <TextField
                      margin="normal"
                      fullWidth
                      required
                      id="postal"
                      label="Postal code"
                      name="postal"
                      autoComplete="postal"
                      onChange={(e) => setPostal(e.target.value)}
                      value={postal}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <TextField
                      margin="normal"
                      fullWidth
                      required
                      id="city"
                      label="City"
                      name="city"
                      autoComplete="city"
                      onChange={(e) => setCity(e.target.value)}
                      value={city}
                    />
                  </Grid>
                
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Créer mon spot
                    </Button>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(https://source.unsplash.com/random)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Grid>
      </div>
    </ThemeProvider>
  );
};

