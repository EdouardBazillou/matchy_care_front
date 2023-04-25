import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AppointmentScheduler from "./Appointment";
import profilPicture from "./pictures/exemple.png";

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
              <img src={profilPicture} alt="" />
              <div>
                <h3 className="proName">{proItem.firstname}</h3>
                <p> {proItem.profession}</p>
              </div>
              <div>
                <h3 className="price"> {proItem.price} €</h3>
              </div>
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div>
      <div>
        P {id}
        <AppointmentScheduler />
      </div>
      <div>{renderProfil()}</div>
    </div>
  );
}

export default Profil;