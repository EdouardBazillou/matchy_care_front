import logo from "./logo.svg";
import "./App.css";
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
import { useEffect, useState } from "react";
function Icone() {
  //on crée une variable d'état à vide qui va recevoir les données du filtre
  const [filteredPros, setFilteredPros] = useState([]);
  //on crée une variable d'état qui permet de stocker le filtre actif
  const [filterSkills, setFilterSkills] = useState("");
  //on crée une variable d'état pour définir si le filtre est actif ou non
  const [filterOn, setFilterOn] = useState(false);
  //on récupére la valeur du filtre via un événement de clic
  const handleFilter = (e) => {
    setFilterSkills(e.target.value);
    setFilterOn(!filterOn);
    getFilteredPros();
  };
  const getFilteredPros = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    //on complète l'url avec le filtre qu'on a stocké en amont
    await fetch(
      `http://127.0.0.1:8000/api/filter/skills/${filterSkills}`,
      options
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setFilteredPros(response);
      });
  };

  useEffect(() => {
    console.log("filteredPros", filteredPros, "filterSkills", filterSkills);
  }, [filteredPros, filterSkills]);
  return (
    <div className="besoin">
      <div>
        <button className="icones" value={"mobility"} onClick={handleFilter}>
          <FaAccessibleIcon />
        </button>
        <p>Mobilité</p>
      </div>
      <div>
        <button className="icones" value={"cooking"} onClick={handleFilter}>
          <MdSoupKitchen />
        </button>
        <p>Repas</p>
      </div>
      <div>
        <button
          className="icones"
          value={"houseCleaning"}
          onClick={handleFilter}
        >
          <MdOutlineCleaningServices />
        </button>
        <p>Entretien</p>
      </div>
      <div>
        <button
          className="icones"
          value={"clothesChange"}
          onClick={handleFilter}
        >
          <FaToilet />
        </button>
        <p>Change</p>
      </div>
      <div>
        <button className="icones" value={"reeducation"} onClick={handleFilter}>
          <MdFitnessCenter />
        </button>
        <p>Réeducation</p>
      </div>
      <div>
        <button className="icones" value={"hygiene"} onClick={handleFilter}>
          <FaBath />
        </button>
        <p>Toilette</p>
      </div>
      <div>
        <button className="icones" value={"nursing"} onClick={handleFilter}>
          <MdOutlineHealthAndSafety />
        </button>
        <p>Soins</p>
      </div>
      <div>
        <button className="icones" value={"medication"} onClick={handleFilter}>
          <MdOutlineMedication />
        </button>
        <p>Traitement</p>
      </div>
      <div>
        <button
          className="icones"
          value={"entertainment"}
          onClick={handleFilter}
        >
          <FaUserFriends />
        </button>
        <p>Compagnie</p>
      </div>
      <div>
        <button
          className="icones"
          value={"transportation"}
          onClick={handleFilter}
        >
          <MdOutlineDirectionsCarFilled />
        </button>
        <p>Transport</p>
      </div>
    </div>
  );
}
export default Icone;
