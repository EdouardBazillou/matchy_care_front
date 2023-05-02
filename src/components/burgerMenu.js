import React, { useState } from "react";
import "./burgerMenu.css";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  // Utiliser le state pour gérer l'état du menu
  const [isOpen, setIsOpen] = useState(false);

  // Fonction de gestion du clic
  const handleBurgerClick = () => {
    setIsOpen(!isOpen); // Inverser l'état du menu
  };

  return (
    <div className="menu">
      {/* Bouton du burger menu */}
      <button className={isOpen ? "open" : ""} onClick={handleBurgerClick}>
        <span className="burger-lines"></span>
        <span className="burger-lines"></span>
        <span className="burger-lines"></span>
      </button>

      {/* Menu affiché/masqué en fonction de l'état */}
      {isOpen && (
        <nav>
          <ul>
            <li>
              <Link to="/registerPatient" className="links">
                M'inscrire en tant que patient
              </Link>
            </li>
            <li>
              <Link to="/registerPro" className="links">
                M'inscrire en tant que pro
              </Link>
            </li>
            <li>
              <Link to="/login" className="links">
                Se connecter
              </Link>
            </li>
            <li>
              <Link to="/MonProfil" className="links">
                mon profil
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default BurgerMenu;
