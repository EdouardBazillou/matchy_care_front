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
      <div>
        <a href="#" onClick>
          <FaAccessibleIcon />
        </a>
        <p> mobilite</p>
      </div>
      <div>
        <a href="2" onClick>
          <MdSoupKitchen />
        </a>
        <p>repas</p>
      </div>
      <div>
        <a href="3" onClick>
          <MdOutlineCleaningServices />
        </a>
        <p>Entretient</p>
      </div>
      <div>
        <a href="5" onClick>
          <FaToilet />
        </a>
        <p>Change</p>
      </div>
      <div>
        <a href="4" onClick>
          <MdFitnessCenter />
        </a>
        <p>Réeducation</p>
      </div>
      <div>
        <a href="2" onClick>
          <FaBath />
        </a>
        <p>Toilette</p>
      </div>
      <div>
        <a href="3" onClick>
          <MdOutlineHealthAndSafety />
        </a>
        <p>Soins</p>
      </div>
      <div>
        <a href="1" onClick>
          <MdOutlineMedication />
        </a>
        <p>Traitement</p>
      </div>
      <div>
        <a href="9" onClick>
          <FaUserFriends />
        </a>
        <p>Compagnie</p>
      </div>
      <div>
        <a href="o" onClick>
          <MdOutlineDirectionsCarFilled />
        </a>
        <p>Transport</p>
      </div>
    </div>
  );
}
export default Icone;
