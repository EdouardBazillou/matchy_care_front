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
      </div>
    </div>
  );
}
export default Accueil;
