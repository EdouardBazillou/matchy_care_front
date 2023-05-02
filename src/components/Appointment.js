import React, { useState } from "react";
import "./profile.css";
import ReactDatePicker from "./DatePicker";
import { useNavigate } from "react-router-dom";

const AppointmentScheduler = (props) => {
  const [selectedTime, setSelectedTime] = useState([]);

  const [selectedDate, setSelectedDate] = useState(new Date());
  //Variable d'état pour gestion de la disponibilité des plages horaires:
  const [availableSlots, setAvailableSlots] = useState({});
  const navigate = useNavigate();
  //Pour récupérer la date sur Calendrier - OK
  const handleChange = (date) => {
    setSelectedDate(date);
    console.log(date);
  };

  //Fonction onClick pour confirmation RDV
  const handleAppointmentBooking = (time) => {
    setAvailableSlots({
      ...availableSlots,
      [selectedDate]: availableSlots[selectedDate],
    });
    alert("votre rdv est le " + selectedDate);
    console.log("Rendez-vous réservé pour le : ", selectedDate);
  };
  // évenement de post Fetch
  const { idPatient } = props;
  const [event, setEvent] = useState({});
  const handleInputChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    //on précise les en-têtes et la méthode
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //on définit le contenu du body
      body: JSON.stringify({
        patient_id: event.patient_id,
        professional_id: event.professional_id,
        timestamp: event.timestamp,
      }),
    };
    //on récupère le bon endpoint
    await fetch(`http://127.0.0.1:8000/api/events`, options)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if ((response.success = true)) {
          const handleAppointmentBooking = (time) => {
            setAvailableSlots({
              ...availableSlots,
              [selectedDate]: availableSlots[selectedDate],
            });
            alert("votre rdv est le " + selectedDate);
            console.log("Rendez-vous réservé pour le : ", selectedDate);
          };
        }
      });
  };
  return (
    <div className="rdv">
      <div className="containerTime">
        <h3>Choisissez la date de votre rdv sur l'agenda</h3>
        <div className="Timer">
          <ReactDatePicker action={handleChange} dateProps={selectedDate} />
        </div>
        <input
          name="timestamp"
          onChange={handleInputChange}
          type="hidden"
          value={selectedDate}
        />
        <input
          name="patient_id"
          onChange={handleInputChange}
          type="hidden"
          value={idPatient}
        />
        <input
          name="professional_id"
          onChange={handleInputChange}
          type="hidden"
          value={"test"}
        />
        {selectedTime && (
          <div>
            <h3>
              Vous avez sélectionné {selectedDate.toLocaleString("fr-FR")}
            </h3>

            <button className="registerBtn" onClick={handleSubmit}>
              Réservez
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentScheduler;
