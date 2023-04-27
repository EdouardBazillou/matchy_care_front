import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BurgerMenu from "../components/burgerMenu";
import { Link } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  const account = JSON.parse(localStorage.getItem("account"));
  return (
    <div>
      <div className="home">
        <Link to="/" style={{ textDecoration: "none" }} className="title">
          <h1>
            <p>Matchy</p>
            <p className="p2">Care</p>
          </h1>
        </Link>

        <header className="title2">
          {props.title && <h1>{props.title}</h1>}
        </header>
        <div className="right">
          <div className="title3">
            {account === "admin" ? (
              <Link to="/patients" className="rightP">
                Consultez la liste des patients
              </Link>
            ) : account === "professional" ? (
              <Link to="/appointments" className="rightP">
                Consulter vos rendez-vous
              </Link>
            ) : account === "patient" ? (
              <Link to="/appointments" className="rightP">
                Consulter vos rendez-vous
              </Link>
            ) : (
              <p className="rightP">Devenir auxiliaire de vie</p>
            )}
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
    </div>
  );
}
export default Header;
