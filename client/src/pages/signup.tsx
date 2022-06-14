import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  Alert,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useState } from "react";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Friend Finder
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUpSide() {
  const [pseudo, setPseudo] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [num, setNum] = useState<string>("");
  const [postal, setPostal] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [controlPassword, setControlPassword] = useState<string>("");
  const [pseudoError, setPseudoError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [localError, setLocalError] = useState<boolean>(false);
  const [controlError, setControlError] = useState<boolean>(false);
  const [termError, setTermError] = useState<boolean>(false);
  let adresse: string = `${num} ${street}, ${city} ${postal}`;
  const params = {
    access_key: process.env.REACT_APP_API_POSITIONSTACK_TOKEN,
    query: { adresse },
    country: "BE",
  };

  const handleRegister = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    const terms = document.getElementById("terms") as HTMLInputElement;

    if (password !== controlPassword || !terms.checked) {
      if (password !== controlPassword) {
        setControlError(true);
      }
      if (!terms.checked) {
        setTermError(true);
      }
    } else {
      await axios
        .get("http://api.positionstack.com/v1/forward", { params })
        .then((response) => {
          // console.log(
          //   `Données reçues : Latitude =${response.data.data[0].latitude} & Longitude =${response.data.data[0].longitude}`
          // );

          axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/user/register`,
            data: {
              pseudo,
              firstName,
              lastName,
              adresse,
              latitude: response.data.data[0].latitude,
              longitude: response.data.data[0].longitude,
              email,
              password,
            },
          })
            .then((res) => {
              window.location.href = "/signin";
            })
            .catch((err) => {
              err.response.data.errors.pseudo
                ? setPseudoError(true)
                : setPseudoError(false);
              err.response.data.errors.email
                ? setEmailError(true)
                : setEmailError(false);
              err.response.data.errors.password
                ? setPasswordError(true)
                : setPasswordError(false);
            });
        })
        .catch((error) => {
          setLocalError(true);
          console.log(error);
        });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {pseudoError && (
        <Alert severity="error" className="text-center">
          Oups ! Your pseudo exist already !
        </Alert>
      )}

      {passwordError && (
        <Alert severity="error" className="text-center">
          Oups ! Wrong password !
        </Alert>
      )}
      {controlError && (
        <Alert severity="error" className="text-center">
          Oups ! Yours password aren't the same !
        </Alert>
      )}
      {emailError && (
        <Alert severity="error" className="text-center">
          Oups ! Your email exist already !
        </Alert>
      )}
      {termError && (
        <Alert severity="error" className="text-center">
          Please, accept the terms !
        </Alert>
      )}

      {localError && (
        <Alert severity="error" className="text-center">
          Oups ! We have a problem to you localise !
        </Alert>
      )}
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleRegister}
              sx={{ mt: 1 }}
            >
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="pseudo"
                    label="Pseudo"
                    name="pseudo"
                    autoComplete="pseudo"
                    autoFocus
                    onChange={(e) => setPseudo(e.target.value)}
                    value={pseudo}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    fullWidth
                    id="firstName"
                    label="FirstName"
                    name="firstName"
                    autoComplete="firstName"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    fullWidth
                    id="lastName"
                    label="LastName"
                    name="lastName"
                    autoComplete="lastName"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
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

                <Grid item xs={12}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="passwordControl"
                    label="Password Control"
                    type="password"
                    id="passwordControl"
                    onChange={(e) => setControlPassword(e.target.value)}
                    value={controlPassword}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="remember" color="primary" id="terms" />
                    }
                    label="Accept the GCD"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/signin" variant="body2">
                    {"Already have an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
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
    </ThemeProvider>
  );
}
