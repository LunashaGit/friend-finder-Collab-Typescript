import { useState } from "react";
import SignInForm from "./ListSpots";
import SignUpForm from "./CreateSpot";

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
    } else if (e.currentTarget.id === "login") {
      setListSpotsModal(true);
      setCreateSpotModal(false);
    }
  };
  return (
    <div className="connection-form">
      <div className="form-container">
        <ul>
          <li
            onClick={handleModals}
            id="create"
            className={createSpotModal ? "active-btn" : ""}
          >
            Créer un spot
          </li>
          <li
            onClick={handleModals}
            id="list"
            className={listSpotsModal ? "active-btn" : ""}
          >
            Voir ses spots
          </li>
        </ul>
        {listSpotsModal && <SignUpForm />}
        {createSpotModal && <SignInForm />}
      </div>
    </div>
  );
};

export default Spot;