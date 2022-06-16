import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

const ListSpots = () => {
  const spotsData = useSelector((state: any) => state.spotsReducer);
  const spotData = useSelector((state: any) => state.spotReducer);

  console.log(spotData)
  console.log(spotsData)
    return (
        <div>
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
                Voici la liste des spots
            </Box>
        </Grid>
      </Grid>
      
    </div>
    );
};

export default ListSpots;