import React, { useEffect, useState } from "react";
import "./RegisterPro.css";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";

function RegisterPro() {
  //on déclare une variable d'état pour stocker les données du professionel
  const [professional, setProfessional] = useState({});
  //on déclare une variable d'état pour stocker les skills du professionnel
  const [skills, setSkills] = useState([]);
  //quand la valeur des champs change, on récupère leur valeur et on les envoie dans professional
  const handleInputChange = (e) => {
    setProfessional({ ...professional, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  //quand les valeurs des skills changent, on les stocke dans skills
  const handleSkills = (e) => {
    setSkills([...skills, e.target.value]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //on précise les en-têtes et la méthode
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //on définit le contenu du body
      body: JSON.stringify({
        lastname: professional.lastname,
        firstname: professional.firstname,
        email: professional.email,
        password: professional.password,
        phoneNumber: professional.phoneNumber,
        password: professional.password,
        profession: professional.profession,
        city: professional.city,
        experienceYears: professional.experienceYears,
        experienceDetails: professional.experienceDetails,
        price: professional.price,
        languages: professional.languages,
        diplomas: professional.diplomas,
        description: professional.description,
        skills: skills,
      }),
    };
    //on récupère le bon endpoint
    await fetch(`http://127.0.0.1:8000/api/professionals`, options)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if ((response.success = true)) {
          navigate("/");
        }
      });
  };
  useEffect(() => {
    console.log("professionnal", professional, "skills", skills);
  }, [professional, skills]);

  return (
    <div>
      <Header title="Contactez-nous" />
      <div className="formPro">
        <form>
          <h2 className="header">Inscription</h2>
          <div className="inputs">
            <h3>Informations personnelles:</h3>
            {/*Nom de famille */}
            <div>
              <input
                required
                className="input"
                placeholder="Nom"
                type="text"
                name="lastname"
                onChange={handleInputChange}
              />
            </div>
            {/*Prénom */}
            <div>
              <input
                required
                className="input"
                placeholder="Prénom"
                type="text"
                name="firstname"
                onChange={handleInputChange}
              />
            </div>
            {/*Adresse mail */}
            <div>
              <input
                required
                className="input"
                placeholder="Email"
                type="email"
                name="email"
                onChange={handleInputChange}
              />
            </div>
            {/*Numéro de téléphone */}
            <div>
              <input
                required
                className="input"
                placeholder="Téléphone"
                type="tel"
                name="phoneNumber"
                onChange={handleInputChange}
              />
            </div>
            {/*Mot de passe */}
            <div>
              <input
                required
                className="input"
                placeholder="Mot de passe"
                type="password"
                name="password"
                onChange={handleInputChange}
              />
            </div>
            {/*Profession */}
            <div>
              <input
                required
                className="input"
                placeholder="Profession"
                type="text"
                name="profession"
                onChange={handleInputChange}
              />
            </div>
            {/*Choix de la ville */}
            <label htmlFor="city">
              <b>Votre secteur:</b>
            </label>
            <select
              name="city"
              defaultValue={"default"}
              onChange={handleInputChange}
            >
              <option value="default">--Choisissez une ville--</option>
              <option value="Nice">Nice</option>
              <option value="Cagnes-sur-mer">Cagnes-sur-mer</option>
              <option value="St-Laurent-du-Var">St-Laurent-du-Var</option>
            </select>
            {/*Nombre d'années d'expérience */}
            <div>
              <input
                required
                className="input"
                placeholder="Expérience (en années)"
                type="text"
                name="experienceYears"
                onChange={handleInputChange}
              />
            </div>
            {/*Détails de l'expérience professionnelle */}
            <label htmlFor="experienceDetails">
              <b>Détails de l'expérience:</b>
            </label>
            <textarea
              name="experienceDetails"
              id="experienceDetails"
              placeholder="Décrivez votre expérience professionnelle en quelques lignes."
              cols="30"
              rows="3"
              onChange={handleInputChange}
            ></textarea>
            {/*Description du profil */}
            <label htmlFor="description">
              <b>Description:</b>
            </label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="3"
              placeholder="Décrivez-vous en quelques lignes."
              onChange={handleInputChange}
            ></textarea>
            {/*Liste des diplômes */}
            <label htmlFor="diplomas">
              <b>Diplômes:</b>
            </label>
            <div>
              <input
                required
                className="input"
                placeholder="Diplômes"
                id="diplomas"
                type="text"
                name="diplomas"
                onChange={handleInputChange}
              />
            </div>
            {/*Langues parlées */}
            <label htmlFor="languages">
              <b>Langues:</b>
            </label>
            <div>
              <input
                required
                className="input"
                placeholder="Langues parlées"
                id="languages"
                type="text"
                name="languages"
                onChange={handleInputChange}
              />
            </div>
            {/*Tarif du professionnel */}
            <label htmlFor="price">
              <b>Mon tarif:</b>
            </label>
            <div>
              <input
                required
                className="input"
                placeholder="Tarif"
                id="price"
                type="text"
                name="price"
                onChange={handleInputChange}
              />
            </div>
            {/*Liste des compétences du professionnel */}
            <div>
              <label htmlFor="skills[]">
                <b>Compétences:</b>
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  name="skills[]"
                  value="mobility"
                  onChange={handleSkills}
                />
                Mobilité
              </label>
              <label>
                <input
                  type="checkbox"
                  name="skills[]"
                  value="cooking"
                  onChange={handleSkills}
                />
                Repas
              </label>
              <label>
                <input
                  type="checkbox"
                  name="skills[]"
                  value="houseCleaning"
                  onChange={handleSkills}
                />
                Entretien
              </label>
              <label>
                <input
                  type="checkbox"
                  name="skills[]"
                  value="clothesChange"
                  onChange={handleSkills}
                />
                Change
              </label>
              <label>
                <input
                  type="checkbox"
                  name="skills[]"
                  value="reeducation"
                  onChange={handleSkills}
                />
                Rééducation
              </label>
              <label>
                <input
                  type="checkbox"
                  name="skills[]"
                  value="hygiene"
                  onChange={handleSkills}
                />{" "}
                Toilette
              </label>
              <label>
                <input
                  type="checkbox"
                  name="skills[]"
                  value="nursing"
                  onChange={handleSkills}
                />
                Soin
              </label>
              <label>
                <input
                  type="checkbox"
                  name="skills[]"
                  value="medication"
                  onChange={handleSkills}
                />
                Traitement
              </label>
              <label>
                <input
                  type="checkbox"
                  name="skills[]"
                  value="entertainment"
                  onChange={handleSkills}
                />
                Compagnie
              </label>
              <label>
                <input
                  type="checkbox"
                  name="skills[]"
                  value="transportation"
                  onChange={handleSkills}
                />
                Transport
              </label>
            </div>
            <button className="registerBtn" onClick={handleSubmit}>
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPro;
