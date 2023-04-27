import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AppointmentScheduler from "./Appointment";
// import profilPicture from "./pictures/exemple.png";
import Header from "./Header";
import "./Appointment.css";

function Profil() {
  const { id } = useParams();
  const [pro, setPro] = useState([]);
  const myObject = {};
  // utiliser l'ID pour récupérer les informations du professionnel sélectionné
  // et afficher les détails sur la page
  useEffect(() => {
    const getPro = async () => {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      let response = await fetch(
        `http://127.0.0.1:8000/api/professionals/${id}`,
        options
      );
      let data = await response.json();
      setPro(Object.values(data));
    };

    getPro();
  }, [id]);

  const renderProfil = () => {
    if (pro && Array.isArray(pro) && pro.length > 0) {
      return pro.map((proItem, index) => {
        return (
          <div key={index}>
            <div className="flex">
              <img
                className="imgProfil"
                src={`/images/${proItem.profilePicture}`}
                alt={proItem.profilePicture}
              ></img>
              <div>
                <h3 className="proName">{proItem.firstname}</h3>{" "}
                <p> {proItem.profession} </p>
              </div>
              <div className="Price">
                <h3> A partir de {proItem.price} €</h3>{" "}
                <h3 className="Price2">
                  {" "}
                  Après déduction impôt : {proItem.price / 2} €
                </h3>
              </div>
              <div>
                <h3 className="proExperienceDetails">Expérience</h3>{" "}
                <p> {proItem.experienceDetails} </p>
              </div>
              <div>
                <h3 className="proDescription">A propos de moi</h3>{" "}
                <p> {proItem.description} </p>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div>
      <Header title="Prenez rendez-vous" />
      <div className="profil">
        <div>{renderProfil()}</div>
        <div>
          <AppointmentScheduler />
        </div>
      </div>
    </div>
  );
}

export default Profil;
