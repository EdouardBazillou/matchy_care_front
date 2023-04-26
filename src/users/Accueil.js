import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import FetchAccueil from "../components/fetchAccueil";
import "../components/professionalCard.css";
import Header from "../components/Header";
function Accueil() {
  return (
    <div>
      <div>
        <Header title="Réservez votre auxiliaire de vie idéal(e)" />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="icone">{/* <Icone /> */}</div>

      <FetchAccueil />
    </div>
  );
}
export default Accueil;
