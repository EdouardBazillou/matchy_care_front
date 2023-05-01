import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AppointmentScheduler from "./Appointment";
// import profilPicture from "./pictures/exemple.png";
import Header from "./Header";
import "./profile.css";
import {
  FaAccessibleIcon,
  FaBath,
  FaToilet,
  FaUserFriends,
} from "react-icons/fa";
import {
  MdSoupKitchen,
  MdOutlineDirectionsCarFilled,
  MdFitnessCenter,
  MdOutlineCleaningServices,
  MdOutlineMedication,
  MdOutlineHealthAndSafety,
} from "react-icons/md";
function Profil() {
  const { id } = useParams();
  const [pro, setPro] = useState([]);
  const myObject = {};
  const idPatient = JSON.parse(localStorage.getItem("id"));
  const idPro = "";
  // utiliser l'ID pour récupérer les informations du professionnel sélectionné
  // et afficher les détails sur la page
  useEffect(() => {
    const getPro = async () => {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      let response = await fetch(
        `http://127.0.0.1:8000/api/professionals/${id}`,
        options
      );
      let data = await response.json();
      setPro(Object.values(data));
    };

    getPro();
  }, [id]);

  const renderProfil = () => {
    if (pro && Array.isArray(pro) && pro.length > 0) {
      return pro.map((proItem, index) => {
        const hasMobilitySkill = proItem.skills.includes("mobility");
        const hasCookingSkill = proItem.skills.includes("cooking");
        const hasHouseCleaningSkill = proItem.skills.includes("houseCleaning");
        const hasClothesChangeSkill = proItem.skills.includes("clothesChange");
        const hasReeducationSkill = proItem.skills.includes("reeducation");
        const hasHygieneSkill = proItem.skills.includes("hygiene");
        const hasNursingSkill = proItem.skills.includes("nursing");
        const hasMedicationSkill = proItem.skills.includes("medication");
        const hasEntertainmentSkill = proItem.skills.includes("entertainment");
        const hasTransportationSkill =
          proItem.skills.includes("transportation");
        return (
          <div key={index}>
            <div className="profile-main-container">
              <div className="profile-first-column">
                <img
                  src={`/images/${proItem.profilePicture}`}
                  alt={proItem.profilePicture}
                ></img>
                <input className="idPro" type="hidden" value={proItem.id} />
                <h3>Expérience:</h3>
                <p> {proItem.experienceDetails} </p>

                <h3>À propos de moi:</h3>
                <p> {proItem.description} </p>

                <h3>Compétences clés :</h3>
                <div className="flex-skills">
                  <p className="skills-hidden">{proItem.skills}</p>
                  {hasMobilitySkill && (
                    <button className="icones">
                      <FaAccessibleIcon />
                    </button>
                  )}

                  {hasHouseCleaningSkill && (
                    <button className="icones">
                      <MdOutlineCleaningServices />
                    </button>
                  )}
                  {hasCookingSkill && (
                    <button className="icones">
                      <MdSoupKitchen />
                    </button>
                  )}
                  {hasClothesChangeSkill && (
                    <button className="icones">
                      <FaToilet />
                    </button>
                  )}
                  {hasReeducationSkill && (
                    <button className="icones">
                      <MdFitnessCenter />
                    </button>
                  )}
                  {hasHygieneSkill && (
                    <button className="icones">
                      <FaBath />
                    </button>
                  )}
                  {hasNursingSkill && (
                    <button className="icones">
                      <MdOutlineHealthAndSafety />
                    </button>
                  )}
                  {hasMedicationSkill && (
                    <button className="icones">
                      <MdOutlineMedication />
                    </button>
                  )}
                  {hasEntertainmentSkill && (
                    <button className="icones">
                      <FaUserFriends />
                    </button>
                  )}
                  {hasTransportationSkill && (
                    <button className="icones">
                      <MdOutlineDirectionsCarFilled />
                    </button>
                  )}
                </div>
              </div>
              <div className="profile-second-column">
                <div className="profile-pro-details">
                  <h3>{proItem.firstname}</h3>
                  <p>{proItem.profession}</p>
                  <h3 id="profile-city">{proItem.city}</h3>
                </div>
                <div className="profile-price">
                  <h3>
                    À partir de{" "}
                    <span className="profile-initial-price">
                      {proItem.price} €
                    </span>{" "}
                    /heure
                  </h3>
                  <p>
                    <span className="profile-discount">
                      Déduction impôts : {proItem.price / 2} €
                    </span>
                    / heure
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div>
      <Header title="Prenez rendez-vous" />
      <div>
        {renderProfil()}
        <div className="profile-agenda">
          <AppointmentScheduler idPatient={idPatient} />
        </div>
      </div>
    </div>
  );
}

export default Profil;
