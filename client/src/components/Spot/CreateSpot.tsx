import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Alert } from "@mui/material";

import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Map from "../Mapping/Map";

import {passions} from "../../components/HobbiesList"

const theme = createTheme();

export default function CreateSpot() {
  const [spotName, setSpotName] = useState("");
  const [street, setStreet] = useState<string>("");
  const [num, setNum] = useState<string>("");
  const [postal, setPostal] = useState<string>("");
  const [city, setCity] = useState<string>("");
  let adresse: string = `${num} ${street}, ${city} ${postal}`;
  const [latitude, setLatitude] = useState<number>(useSelector((state: any) => state.userReducer.latitude));
  const [longitude, setLongitude] = useState<number>(useSelector((state: any) => state.userReducer.longitude));
  const [description, setDescription] = useState<string>("");
  const creatorID  = useSelector((state: any) => state.userReducer)._id;
  const [hobbies, setHobbies] = React.useState<string[]>([]);
  const [spotNameError, setSpotNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const params = {
    access_key: process.env.REACT_APP_API_POSITIONSTACK_TOKEN,
    query: { adresse },
    country: "BE",
  };

  const handleChange = (event: SelectChangeEvent<typeof hobbies>) => {
    const {
      target: { value },
    } = event;
    setHobbies(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const geoLoc = async () => {
    await axios
    .get("http://api.positionstack.com/v1/forward", { params })
    .then((response) => {
      setLatitude(response.data.data[0].latitude);
      setLongitude(response.data.data[0].longitude);
    })
    .catch((err) => {
      console.log("can't found localisation");
      
    })
    
  }

  const addSpot = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(spotName, latitude, longitude, hobbies, description, creatorID);
    
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
        // err.response.data.errors.spotName
        //   ? setSpotNameError(true)
        //   : setSpotNameError(false);
        // err.response.data.errors.password
        //   ? setPasswordError(true)
        //   : setPasswordError(false);
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="pt-4 h-screen">
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
          

          <Grid
            item
            xs={12}          
            md={8}
            lg={6}
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
                  <Grid item xs={12}>
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
                    type="button"
                    onClick={geoLoc}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Géolocaliser mon spot
                  </Button>
                  <Grid item xs={12}>
                    <Select
                      fullWidth
                      required
                      label="hobbies"
                      id="hobbies"
                      name="hobbies"
                      multiple
                      value={hobbies}
                      onChange={handleChange}
                      input={<OutlinedInput label="Tag" />}
                      renderValue={(selected) => selected.join(', ')}
                      MenuProps={MenuProps}
                    >
                      {passions.map((item) => (
                        <MenuItem key={item.name} value={item.name}>
                          <Checkbox checked={hobbies.indexOf(item.name) > -1} />
                          <ListItemText primary={item.name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                      id="description"
                      label="Décrivez les activités disponibles"
                      name="decription"
                      autoComplete="description"
                      autoFocus
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
                </Grid>

              </Box>
            </Box>
          </Grid>
          {/* right side of page*/}
          <Grid item xs={12} md={4} lg={6}>
            <Grid container sx={{ height:"100%" }}>
              <Grid item xs={false} md={12}

                sx={{
                  backgroundImage: "url(https://source.unsplash.com/random)",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: (t) =>
                    t.palette.mode === "light"
                      ? t.palette.grey[50]
                      : t.palette.grey[900],
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}/>
              <Grid
                item
                xs={12}>
                <Map latitude={latitude} longitude={longitude} />

              </Grid>
            </Grid>
        </Grid>
              {/* */}
        </Grid>
      </div>


      <Grid container>
            <Grid item xs={12} sm={8} md={6}>
              <Grid container>
                Formulaire
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4} md={6}>
              <Grid container>
                <Grid item xs={12} sm={12} md={6}>Photo</Grid>
                <Grid item xs={12} sm={12} md={6}>Map</Grid>
              </Grid>
            </Grid>
      </Grid>




    </ThemeProvider>
  );
};

