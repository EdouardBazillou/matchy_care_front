import React from "react";
import { useEffect, useState } from "react";
import "./professionalCard.css";
import profilPicture from "./pictures/exemple.png";
import { Link } from "react-router-dom";
import { useReducer } from "react";
import { buttonReducer } from "./buttonReducer";
import "../App.css";
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
function FetchAccueil() {
  const [pro, setPro] = useState([]);
  //contient valeur input
  // const [filtreInput, setFiltre] = useState("");
  const [skillButton, updateskill] = useReducer(buttonReducer, "all");
  //variable d'etat vide qui va contenir le skill au moment du onclick-button
  // const [recherche, setRecherche] = useState("");

  //fonction de fetch
  const getPro = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (skillButton !== "") {
      let response = await fetch(
        `http://127.0.0.1:8000/api/filter/skills/${skillButton}`,
        options
      );
      let data = await response.json();

      setPro(data.professionals);
      console.log(data);
    }
    if (skillButton === "all") {
      let response = await fetch(
        `http://127.0.0.1:8000/api/professionals`,
        options
      );
      let data = await response.json();

      setPro(data.data);
      console.log(data);
    }
  };

  const renderPro = () => {
    if (pro && Array.isArray(pro) && pro.length > 0) {
      return pro.map((proItem, index) => {
        return (
          <div key={index} className="proCard">
            <Link to={`/professional/${proItem.id}`} key={index}>
              <img src={profilPicture} alt="" />
              <div className="flex">
                <div>
                  <h3 className="proName">{proItem.firstname}</h3>
                  <p> {proItem.profession}</p>
                </div>
                <div>
                  <h3 className="price"> {proItem.price} €</h3>
                </div>
              </div>
              <div className="proDetails">
                {/* <p>Email: {item.email}</p>
              <p>Phone: {item.phoneNumber}</p> */}
              </div>
              {/* <button>View Profile</button> */}
            </Link>
          </div>
        );
      });
    }
  };

  useEffect(() => {
    getPro();
  }, [skillButton]);

  return (
    <div>
      <div className="besoin">
        <div className="skills">
          <button
            className="icones"
            onClick={() => {
              updateskill("mobility");
              console.log(skillButton);
            }}
          >
            <FaAccessibleIcon />
          </button>
          <p> mobilite</p>
        </div>
        <div>
          <button className="icones" onClick={() => updateskill("cooking")}>
            <MdSoupKitchen />
          </button>
          <p className="skills">repas</p>
        </div>
        <div>
          <button
            className="icones"
            onClick={() => updateskill("houseCleaning")}
          >
            <MdOutlineCleaningServices />
          </button>
          <p className="skills">Entretient</p>
        </div>
        <div>
          <button className="icones" onClick={() => updateskill("dressing")}>
            <FaToilet />
          </button>
          <p className="skills">Change</p>
        </div>
        <div>
          <button className="icones" onClick={() => updateskill("reeducation")}>
            <MdFitnessCenter />
          </button>
          <p className="skills">Réeducation</p>
        </div>
        <div>
          <button className="icones" onClick={() => updateskill("hygiene")}>
            <FaBath />
          </button>
          <p className="skills">Toilette</p>
        </div>
        <div>
          <button className="icones" onClick={() => updateskill("nursing")}>
            <MdOutlineHealthAndSafety />
          </button>
          <p className="skills">Soins</p>
        </div>
        <div>
          <button className="icones" onClick={() => updateskill("treatment")}>
            <MdOutlineMedication />
          </button>
          <p className="skills">Traitement</p>
        </div>
        <div>
          <button
            className="icones"
            onClick={() => updateskill("entertainment")}
          >
            <FaUserFriends />
          </button>
          <p className="skills">Compagnie</p>
        </div>
        <div>
          <button className="icones" onClick={() => updateskill("driving")}>
            <MdOutlineDirectionsCarFilled />
          </button>
          <p className="skills">Transport</p>
        </div>
      </div>
      <div>
        <button onClick={() => updateskill("all")}>Tous</button>
      </div>
      <div className="flex">{renderPro()}</div>
    </div>
  );
}

export default FetchAccueil;
