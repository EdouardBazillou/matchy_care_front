import React from "react";
import { useEffect, useState } from "react";
import "./professionalCard.css";
import profilPicture from "./pictures/exemple.png";
import { Link } from "react-router-dom";
import { useReducer } from "react";
import { buttonReducer } from "./buttonReducer";
import "../App.css";
import SearchBar from "./searchbar";
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

  const [skillButton, updateskill] = useReducer(buttonReducer, "all");
  //variable d'etat vide qui va contenir le skill au moment du onclick-button

  const handleSearch = (ville, besoin, date) => {
    setSearchParams({
      ville: ville,
      besoin: besoin,
      date: date,
    });
  };

  const [searchParams, setSearchParams] = useState({
    ville: "",
    besoin: "",
    date: "",
  });

  //fonction de fetch
  const getPro = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    //affichage de tout les professionels
    if (skillButton === "all") {
      let response = await fetch(
        `http://127.0.0.1:8000/api/professionals`,
        options
      );
      let data = await response.json();

      setPro(data.data);
    }
    //affichage des professionels en fonction du besoin en cliquant sur les boutons
    if (skillButton !== "all") {
      let response = await fetch(
        `http://127.0.0.1:8000/api/filter/skills/${skillButton}`,
        options
      );
      let data = await response.json();

      setPro(data.professionals);
    }
    //affichage des professionels par localisation en saisissant la ville sur la searchBar
    if (searchParams.ville != "") {
      let response = await fetch(
        `http://127.0.0.1:8000/api/filter/city/${searchParams.ville}`,
        options
      );
      let data = await response.json();

      setPro(data.professionals);
    }
    //affichage des professionels par skills via la searchBar
    if (searchParams.besoin != "") {
      let response = await fetch(
        `http://127.0.0.1:8000/api/filter/skills/${searchParams.besoin}`,
        options
      );
      let data = await response.json();

      setPro(data.professionals);
    }
  };

  const renderPro = () => {
    if (pro && Array.isArray(pro) && pro.length > 0) {
      return pro.map((proItem, index) => {
        return (
          <div key={index} className="proCard">
            <Link
              className="proCard"
              to={`/professional/${proItem.id}`}
              key={index}
            >
              <img src={`/images/${proItem.profilePicture}`} alt="" />
              <div className="flex">
                <div className="proCardLeftText">
                  <h3 className="proCard proName">{proItem.firstname}</h3>
                  <p> {proItem.profession}</p>
                </div>
                <div>
                  <h3 className="proCard price"> {proItem.price}€/Heure</h3>
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
  useEffect(() => {
    getPro();
  }, [searchParams]);
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
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
