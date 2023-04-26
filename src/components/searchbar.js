import ReactDatePicker from "../components/DatePicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSistrix } from "react-icons/fa";
import { useState } from "react";
import React from "react";

function SearchBar(props) {
  const [ville, setVille] = useState("");
  const [besoin, setBesoin] = useState("");
  const [date, setDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(ville, besoin, date);
  };
  //select checkbox
  var expanded = false;
  function showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
      checkboxes.style.display = "block";
      expanded = true;
    } else {
      checkboxes.style.display = "none";
      expanded = false;
    }
  }
  return (
    <form onSubmit={handleSubmit} className="searchbar">
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
          value={ville}
          placeholder="Ville"
          onChange={(e) => setVille(e.target.value)}
        >
          <option value="" disabled selected hidden>
            Entrez votre localisation
          </option>
          <option value="Nice">Nice</option>
          <option value="St-Laurent-du-Var">Saint Laurent du Var</option>
          <option value="Cagnes sur Mer">Cagnes sur Mer</option>
        </select>
      </div>
      <hr></hr>
      <div className="input-search2">
        <label className="title-input-search" for="inputBesoin">
          Besoin
        </label>
        <select
          className="search_input"
          name="besoin"
          value={besoin}
          onChange={(e) => setBesoin(e.target.value)}
        >
          <option value="" disabled selected hidden>
            Comment peut-on vous aider ?
          </option>
          <option name="mobility" value="Mobility">
            Mobility
          </option>
          /<option value="cooking">Repas</option>
          <option value="houseCleaning">Entretien</option>
          <option value="dressing">Change</option>
          <option value="reeducation">Rééducation</option>
          <option value="hygiene">Toilette</option>
          <option value="nursing">Soin</option>
          <option value="treatment">Traitement</option>
          <option value="entertainment">Compagnie</option>
          <option value="driving">Transport</option>
        </select>
        {/* select de test */}
        {/* <div class="multiselect">
          <div className="selectBox" onClick={showCheckboxes}>
            <select className="search_input" name="besoin">
              <option>Choix</option>
            </select>
            <div class="overSelect"></div>
          </div>
          <div id="checkboxes">
            <label for="one">
              <input
                name="besoin"
                value="mobility"
                onChange={(e) =>
                  setBesoin(e.target.checked ? besoin + e.target.value : besoin)
                }
                type="checkbox"
                id="one"
              />
              Mobilité
            </label>
            <label for="two">
              <input
                name="besoin"
                value="cooking"
                onChange={(e) =>
                  setBesoin(
                    e.target.checked ? besoin + e.target.value + ", " : besoin
                  )
                }
                type="checkbox"
                id="two"
              />
              Repas
            </label>
            <label for="three">
              <input type="checkbox" id="three" />
              Entretien
            </label>
          </div>
        </div> */}
      </div>
      <hr></hr>
      <ReactDatePicker selected={date} onChange={setDate} />
      <button type="submit" className="loupe">
        <FaSistrix />
      </button>
    </form>
  );
}
export default SearchBar;
