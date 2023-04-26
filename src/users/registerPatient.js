import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";

function RegisterPatient() {
  //on déclare une variable d'état pour stocker les valeurs du formulaire
  const [user, setUser] = useState({});
  //on déclare une variable d'état pour stocker les valeurs des skills
  const [needs, setNeeds] = useState([]);

  const navigate = useNavigate();
  //quand la valeur des champs change, on récupère leur valeur et on les envoie dans user
  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  //quand les valeurs des besoins changent, on les stocke dans needs
  const handleNeeds = (e) => {
    setNeeds([...needs, e.target.value]);
  };
  //à la validaion du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();
    //on précise les en-têtes et la méthode
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //on définit le contenu du body
      body: JSON.stringify({
        lastname: user.lastname,
        firstname: user.firstname,
        email: user.email,
        password: user.password,
        phoneNumber: user.phoneNumber,
        age: user.age,
        address: user.address,
        additional_information: user.additional_information,
        description: user.description,
        needs: needs,
      }),
    };
    //on récupère le bon endpoint
    await fetch(`http://127.0.0.1:8000/api/patients`, options)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if ((response.success = true)) {
          navigate("/");
        }
      });
  };

  return (
    <div>
      <Header title="Inscription Patient" />

      <div className="formu">
        <form>
          <div>
            <input
              type="text"
              className="info"
              placeholder="Nom"
              name="lastname"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type="text"
              className="info"
              placeholder="Prénom"
              name="firstname"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type="text"
              className="info"
              placeholder="Email"
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type="password"
              className="info"
              placeholder="Mot de passe"
              name="password"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type="tel"
              className="info"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Numéro de téléphone"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type="text"
              className="info"
              name="age"
              id="age"
              placeholder="Age"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type="text"
              className="info"
              placeholder="Adresse"
              name="address"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type="text"
              className="info"
              name="additional_information"
              id="additional_information"
              placeholder="Informations complémentaires"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type="text"
              className="info"
              name="description"
              id="description"
              placeholder="Description"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>
              <strong>Besoins:</strong>
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="needs[]"
                value="mobility"
                onChange={handleNeeds}
              />
              Mobilité
            </label>
            <label>
              <input
                type="checkbox"
                name="needs[]"
                value="cooking"
                onChange={handleNeeds}
              />
              Repas
            </label>
            <label>
              <input
                type="checkbox"
                name="needs[]"
                value="houseCleaning"
                onChange={handleNeeds}
              />
              Entretien
            </label>
            <label>
              <input
                type="checkbox"
                name="needs[]"
                value="clothesChange"
                onChange={handleNeeds}
              />
              Change
            </label>
            <label>
              <input
                type="checkbox"
                name="needs[]"
                value="reeducation"
                onChange={handleNeeds}
              />
              Rééducation
            </label>
            <label>
              <input
                type="checkbox"
                name="needs[]"
                value="hygiene"
                onChange={handleNeeds}
              />{" "}
              Toilette
            </label>
            <label>
              <input
                type="checkbox"
                name="needs[]"
                value="nursing"
                onChange={handleNeeds}
              />
              Soin
            </label>
            <label>
              <input
                type="checkbox"
                name="needs[]"
                value="medication"
                onChange={handleNeeds}
              />
              Traitement
            </label>
            <label>
              <input
                type="checkbox"
                name="needs[]"
                value="entertainment"
                onChange={handleNeeds}
              />
              Compagnie
            </label>
            <label>
              <input
                type="checkbox"
                name="needs[]"
                value="transportation"
                onChange={handleNeeds}
              />
              Transport
            </label>
          </div>
          <button onClick={handleSubmit} className="compte">
            Créer un compte
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPatient;
