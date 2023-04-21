import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function RegisterPatient() {

  const [user, setUser] = useState({
    Nom: "",
    Prénom: "",
    email: "",
    password: "",
   confirmation: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
         Nom: user. Nom,
         Prénom: user. Prénom,
         email: user.email,
        password: user.password,
         confirmation: user.confirmation,
      }),
    };
    await fetch(`http://127.0.0.1:8000/api/patients`, options)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log("response", response);
        if ((response.success = true)) {
          navigate("/");
        }
      });
  };
  return (
<div class="formu">
  <h3>Inscription Patient</h3>
    <form onSubmit={handleSubmit}>
      <div>
          <input
            type="text"
            className="info"
            placeholder="Nom"
            name="nom"
            value={user.name}
            onChange={handleInputChange}
          />
        </div>
      <div>
          <input
            type="text"
            className="info"
            placeholder="Prenom"
            name="nom"
            value={user.name}
            onChange={handleInputChange}
          />
        </div>
            <div>
          <input
            type="text"
            className="info"
            placeholder="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="password"
            className="info"
            placeholder="mot de passe"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="password"
            className="info"
            placeholder="confirmation mdp "
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="compte">
         Crée Mon Compte 
        </button>
    </form>
      </div>
  );
}

export default RegisterPatient;