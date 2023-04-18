<<<<<<< HEAD
import SearchBar from "../components/searchbar";
import DatePicker from "../components/DatePicker";
import { FaSistrix } from "react-icons/fa";
function Accueil() {
  return (
    <div>
      <h1>Matchy Care</h1>
      <div className="searchbar" type="text">
        <SearchBar />
        <DatePicker />
        <a href="#" onClick>
          <FaSistrix />
        </a>
=======
import React from "react";
import BurgerMenu from "../components/burgerMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Accueil() {
  return (
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
            <Link to="/profile" className="profilLink">
              <FontAwesomeIcon icon={faUser} />{" "}
            </Link>
          </div>
        </div>
>>>>>>> f3fd034a8578292ddf7152ce3377cb6816ef077e
      </div>
    </div>
  );
}
export default Accueil;
