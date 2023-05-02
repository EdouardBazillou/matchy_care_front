import Header from "../Header";
import React, { useState, useEffect } from "react";
import "./passwordReset.css";
function PasswordReset() {
  //on stocke le mail dans la variable d'état
  const [userMail, setUserMail] = useState("");
  //quand la valeur de l'input change, on l'envoie dans la variable d'état
  const handleEmail = (e) => {
    setUserMail(e.target.value);
  };
  const sendMail = async (e) => {
    e.preventDefault();
    //on précise les en-têtes et la méthode
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //on définit le contenu du body
      body: JSON.stringify({
        email: userMail,
      }),
    };
    await fetch(`http://127.0.0.1:8000/api/forgot`, options)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log("response", response);
      });
  };
  useEffect(() => {
    console.log("userMail:", userMail);
  }, [userMail]);

  return (
    <div>
      <Header title="Réinitialiser votre mot de passe:" />
      <h3 className="password-reset-title">
        Saisissez votre email pour recevoir un lien de réinitialisation:
      </h3>
      <div className="password-reset-form">
        <form>
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            onChange={handleEmail}
          />
          <button className="registerBtn" onClick={sendMail}>
            Valider
          </button>
        </form>
      </div>
    </div>
  );
}

export default PasswordReset;
