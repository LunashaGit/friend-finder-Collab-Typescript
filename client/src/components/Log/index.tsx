import { useState } from "react";

type LogProps = {
  signin: boolean;
  signup: boolean;
};

const Log = (props: LogProps) => {
  const [signUpModal, setSignUpModal] = useState<boolean>(props.signup);
  const [signInModal, setSignInModal] = useState<boolean>(props.signin);

  const handleModals = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget.id === "register") {
      setSignInModal(false);
      setSignUpModal(true);
    } else if (e.currentTarget.id === "login") {
      setSignInModal(true);
      setSignUpModal(false);
    }
  };
  return (
    <div className="connection-form">
      <div className="form-container">
        <ul>
          <li
            onClick={handleModals}
            id="register"
            className={signUpModal ? "active-btn" : ""}
          >
            S'inscrire
          </li>
          <li
            onClick={handleModals}
            id="login"
            className={signInModal ? "active-btn" : ""}
          >
            Se connecter
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Log;
