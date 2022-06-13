import axios from "axios";
import React, { useState } from "react";
import SignInForm from "./SignInForm";

const SignUpForm = () => {
  const [formSubmit, setFormSubmit] = useState(false);
    const [pseudo, setPseudo] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [adresse, setAdresse] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [password, setPassword] = useState("");
    const [controlPassword, setControlPassword] = useState("");

    const geoPos = () => {
      const params = {
        access_key: process.env.REACT_APP_API_POSITIONSTACK_TOKEN,
        query: { adresse },
        country: 'BE',
      }
      axios.get('http://api.positionstack.com/v1/forward', {params})
          .then(response => {
            console.log(response.data);
            setLatitude(response.data.data[0].latitude);
            setLongitude(response.data.data[0].longitude);
            console.log(response.data.data[0].latitude);
            
          }).catch(error => {
            console.log(error);
          });
    }

  const handleRegister = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    geoPos();
    console.log(latitude);
    
    const terms = document.getElementById("terms") as HTMLInputElement;
    const pseudoError = document.querySelector(".pseudo.error")!;
    const emailError = document.querySelector(".email.error")!;
    const passwordError = document.querySelector(".password.error")!;
    const passwordConfirmError = document.querySelector(
      ".password-confirm.error"
    )!;
    const termsError = document.querySelector(".terms.error")!;

    passwordConfirmError.innerHTML = "";
    termsError.innerHTML = "";

    
    if (password !== controlPassword || !terms.checked) {
      if (password !== controlPassword) {
        passwordConfirmError.innerHTML =
          "les mots de passe ne correspondent pas";
      }
      if (!terms.checked) {
        termsError.innerHTML = "veuillez valider les conditions generales";
      }
      if (Object.keys(latitude).length) {
        console.log("erreur geoloc");
      }
    } else {

      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/user/register`,
        data: {
          pseudo, firstName, lastName, adresse, latitude, longitude, email, password
        },
      })
        .then((res) => {
          setFormSubmit(true);
          console.log(latitude);
          
        })
        .catch((err) => {
          pseudoError.innerHTML = err.response.data.errors.pseudo;
          emailError.innerHTML = err.response.data.errors.email;
          passwordError.innerHTML = err.response.data.errors.password;
        });
    }
  };
  return (
    <>
      {formSubmit ? (
        <>
          <SignInForm />
          <span></span>
          <h4 className="success">
            Enregistrement reussi, veuillez vous connecter
          </h4>
        </>
      ) : (
        <form action="" onSubmit={handleRegister} id="sign-up-form">
          <label htmlFor="pseudo">Pseudo</label>
          <br />
          <input
            type="text"
            name="pseudo"
            id="pseudo"
            onChange={(e) => setPseudo(e.target.value)}
            value={pseudo}
          />
          <div className="pseudo error"></div>
          <br />
          <label htmlFor="firstName">Prénom</label>
          <br />
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          <div className="pseudo error"></div>
          <br />
          <label htmlFor="lastName">Nom</label>
          <br />
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          <div className="pseudo error"></div>
          <br />
          <label htmlFor="adresse">Adresse</label>
          <br />
          <input
            type="text"
            name="adresse"
            id="adresse"
            onChange={(e) => setAdresse(e.target.value)}
            value={adresse}
          />
          <div className="pseudo error"></div>
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="email error"></div>
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="password error"></div>
          <br />
          <label htmlFor="password-conf">Control Password</label>
          <br />
          <input
            type="password"
            name="password-conf"
            id="password-conf"
            onChange={(e) => setControlPassword(e.target.value)}
            value={controlPassword}
          />
          <div className="password-confirm error"></div>
          <br />
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            I accept terms{" "}
            <a href="/" target="_blank" rel="noopener noreferrer">
              GCD
            </a>
          </label>
          <div className="terms error"></div>
          <br />
          <input type="submit" value="Valider inscription" />
        </form>
      )}
    </>
  );
};

export default SignUpForm;
