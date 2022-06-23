
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { useSelector } from "react-redux";
import { useContext } from "react";
import { UidContext } from "../AppContext";
import { NavLink } from "react-router-dom";

const ListSpots = () => {
  const spotsData = useSelector((state: any) => state.spotsReducer);
  const uid = useContext(UidContext);

  console.log(spotsData)
  console.log(uid);
  
    return (
      // <div>
      //   
      //           <ul>
      //             {Object.keys(spotsData).length && spotsData.map((spot:any) => {
      //               if (spot.creatorID === uid) return <li key={spot._id}> {spot.spotName} </li>
              
      //             })}
      //           </ul>
      // </div>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginX : 'auto' }}>
        <Typography>
          Voici la liste de vos spots :
        </Typography>
        <Divider />
        <List>
          {Object.keys(spotsData).length && spotsData.map((spot:any) => {
            if (spot.creatorID === uid) return (
            <ListItem disablePadding key={spot._id}>
              <NavLink to="/spotEdit">
                <ListItemButton>
                  <ListItemIcon>
                    <EditIcon />
                  </ListItemIcon>
                  <ListItemText primary={spot.spotName} />
                </ListItemButton>
              </NavLink>
            </ListItem>)
          })}
        </List>
      
    </Box>
    );
};

export default ListSpots;