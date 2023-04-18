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
function Icone() {
  return (
    <div className="besoin">
      <div className="icon-text-container"></div>
      <p class="icones">
        <a href="#" onClick>
          <FaAccessibleIcon />
        </a>
        mobilite
      </p>
      <p class="icones">
        <a href="2" onClick>
          <MdSoupKitchen />
        </a>
        repas
      </p>
      <p class="icones">
        <a href="3" onClick>
          <MdOutlineCleaningServices />
        </a>
        Entretient
      </p>
      <p class="icones" >
        <a href="5" onClick>
          <FaToilet />
        </a>
        Change
      </p>
      <p class="icones">
        <a href="4" onClick>
          <MdFitnessCenter />
        </a>
        Réeducation
      </p>
      <p class="icones">
        <a href="2" onClick>
          <FaBath />
        </a>
        Toilette
      </p>
      <p class="icones">
        <a href="3" onClick>
          <MdOutlineHealthAndSafety />
        </a>
        Soins
      </p>
      <p class="icones">
        <a href="1" onClick>
          <MdOutlineMedication />
        </a>
        Traitement
      </p>
      <p class="icones">
        <a href="9" onClick>
          <FaUserFriends />
        </a>
        Compagnie
      </p>
      <p class="icones">
        <a href="o" onClick>
          <MdOutlineDirectionsCarFilled />
        </a>
        Transport
      </p>
    </div>
  );
}
export default Icone;
