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
      </div>
    </div>
  );
}
export default Accueil;
