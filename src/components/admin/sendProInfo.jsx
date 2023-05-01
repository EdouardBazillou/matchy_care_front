import React from "react";
import "./sendProInfo.css";
import Header from "../Header";

function SendProInfo() {
  return (
    <div>
      <Header title="Contacter l'administrateur" />
      <h3 className="contact-admin-title">
        Renseignez vos informations de contact
      </h3>
      <form action="" method="post" className="contact-admin-form">
        <label htmlFor="lastname">Nom de famille:</label>
        <input type="text" name="lastname" id="lastname" />
        <label htmlFor="firstname">Prénom:</label>
        <input type="text" name="firstname" id="firstname" />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="phoneNumber">Numéro de téléphone:</label>
        <input type="tel" name="phoneNumber" id="phoneNumber" />
        <button className="registerBtn">Valider</button>
      </form>
    </div>
  );
}

export default SendProInfo;
