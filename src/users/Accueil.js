import React from "react";
import BurgerMenu from "../components/burgerMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Icone from "../icone";
import SearchBar from "../components/searchbar";
import "react-datepicker/dist/react-datepicker.css";

function Accueil() {
  return (
    <div>
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
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <SearchBar />
      <br></br>
      <br></br>
      <br></br>
      <div className="icone">
        <Icone />
      </div>
    </div>
  );
}
export default Accueil;
