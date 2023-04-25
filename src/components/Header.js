import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BurgerMenu from "../components/burgerMenu";
import { Link } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
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
    </div>
  );
}
export default Header;
