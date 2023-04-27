import React from "react";
import "./sendProInfo.css";
import Header from "../Header";

function SendProInfo() {
  return (
    <div>
      <Header />
      <h1 className="contact-admin-title">Contacter l'administrateur</h1>
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
