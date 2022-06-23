import { useState } from "react";
import CreateSpot from "./CreateSpot";
import ListSpots from "./ListSpots";

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Grid } from "@mui/material";

type SpotProps = {
  list: boolean;
  create: boolean;
};

const Spot = (props: SpotProps) => {
  const [listSpotsModal, setListSpotsModal] = useState<boolean>(props.list);
  const [createSpotModal, setCreateSpotModal] = useState<boolean>(props.create);

  const handleModals = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget.id === "create") {
      setListSpotsModal(false);
      setCreateSpotModal(true);
    } else if (e.currentTarget.id === "list") {
      setListSpotsModal(true);
      setCreateSpotModal(false);
    }
  };
  return (
      <Grid >
        <Stack spacing={2} direction="row" justifyContent="center">
          <Button
            onClick={handleModals}
            id="create"
            className={createSpotModal ? "active-btn" : ""}
          >
          Créer un spot
          </Button>
          <Button
            onClick={handleModals}
            id="list"
            className={listSpotsModal ? "active-btn" : ""}
          >
          Voir vos spots
          </Button>
        </Stack>
        {listSpotsModal && <ListSpots />}
        {createSpotModal && <CreateSpot />}
      </Grid>
  );
};

export default Spot;