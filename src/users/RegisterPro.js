import React, { useState } from "react";
import "./RegisterPro.css";
import BurgerMenu from "../components/burgerMenu";
import { Link } from "react-router-dom";

function RegisterPro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [telephone, setTelephone] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleTelephoneChange = (e) => setTelephone(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, message };

    fetch("URL", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log("Réponse:", response);
        // Gérer la réponse du backend ou service de messagerie ici.
      })
      .catch((error) => {
        console.error("Erreur:", error);
        // Gérer les erreurs ici.
      });
  };

  return (
    <div>
      <div className="home">
        <div className="title">
          <h1>
            <p>Matchy</p>
            <p className="p2">Care</p>
          </h1>
        </div>
        <div className="title2">
          <h1>Réservez votre auxiliaire de vie idéal(e)</h1>
        </div>
        <div className="right">
          <div className="title3">
            <p>Devenir auxiliaire de vie </p>
          </div>
          <div className="icon1">
            <BurgerMenu />
            <div className="icon2">
              <Link to="/profile" className="profilLink"></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="formPro">
        <form onSubmit={handleSubmit}>
          <h2 className="header">Inscription</h2>
          <div className="inputs">
            <div>
              <label htmlFor="name"></label>
              <input
                className="input"
                placeholder="Nom"
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div>
              <label htmlFor="email"></label>
              <input
                className="input"
                placeholder="Email"
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <label htmlFor="phone"></label>
              <input
                className="input"
                placeholder="Télehone"
                type="text"
                id="telephone"
                value={telephone}
                onChange={handleTelephoneChange}
              />
            </div>
            <div>
              <label htmlFor="message"></label>
              <textarea
                className="input"
                placeholder="Votre message"
                id="message"
                value={message}
                onChange={handleMessageChange}
              />
            </div>
            <button className="registerBtn" type="submit">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPro;
