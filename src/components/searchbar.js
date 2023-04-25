import ReactDatePicker from "../components/DatePicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSistrix } from "react-icons/fa";
import React from "react";

function SearchBar() {
  return (
    <form className="searchbar">
      <div className="circle"></div>
      <div className="input-search">
        <label className="title-input-search" for="ville">
          Ville
        </label>
        <select
          className="search_input"
          type="text"
          id="ville"
          name="ville"
          placeholder="Ville"
        >
          <option value="" disabled selected hidden>
            Entrez votre localisation
          </option>
          <option value="Nice">Nice</option>
          <option value="Saint Laurent du Var">Saint Laurent du Var</option>
          <option value="Cagnes sur Mer">Cagnes sur Mer</option>
        </select>
      </div>
      <hr></hr>
      <div className="input-search2">
        <label className="title-input-search" for="inputBesoin">
          Besoin
        </label>
        <select className="search_input" name="besoin">
          <option value="" disabled selected hidden>
            Comment peut-on vous aider ?
          </option>
          <option name="mobility" value="Mobility">
            Mobility
          </option>
          <option value="Repas">Repas</option>
          <option value="Entretien">Entretien</option>
          <option value="Change">Change</option>
          <option value="Rééducation">Rééducation</option>
          <option value="Toilette">Toilette</option>
          <option value="Soin">Soin</option>
          <option value="Traitement">Traitement</option>
          <option value="Compagnie">Compagnie</option>
          <option value="Transport">Transport</option>
        </select>
      </div>
      <hr></hr>
      <ReactDatePicker />
      <button className="loupe">
        <FaSistrix />
      </button>
    </form>
  );
}
export default SearchBar;
// {/* <div>
// <form className="searchbar">
//   <label for="inputVille"></label>
//   <select name="ville">
//     <option value="" selected></option>
//     <option value="Nice">Nice</option>
//     <option value="Saint Laurent du Var">Saint Laurent du Var</option>
//     <option value="Cagnes sur Mer">Cagnes sur Mer</option>
//   </select>

//   <label for="inputBesoin"></label>
//   <select name="besoin">
//     <option value="" selected></option>
//     <option value=" Mobilité"> Mobilité</option>
//     <option value="Repas">Repas</option>
//     <option value="Entretien">Entretien</option>
//     <option value="Change">Change</option>
//     <option value="Rééducation">Rééducation</option>
//     <option value="Toilette">Toilette</option>
//     <option value="Soin">Soin</option>
//     <option value="Traitement">Traitement</option>
//     <option value="Compagnie">Compagnie</option>
//     <option value="Transport">Transport</option>
//   </select>

//   <input placeholder="Dates" />
//   <button class="fa-solid fa-magnifying-glass"></button>
// </form>
// </div> */}
