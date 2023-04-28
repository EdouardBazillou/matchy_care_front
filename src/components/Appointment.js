import React, { useState } from "react";
import "./Appointment.css";
import ReactDatePicker from "./DatePicker";

const AppointmentScheduler = () => {
  const [selectedTime, setSelectedTime] = useState([]);
  const [selectDate, setSelectDate] = useState([]);
  //Variable d'état pour gestion de la disponibilité des plages horaires:
  const [availableSlots, setAvailableSlots] = useState({});

  //Pour récupérer la date sur Calendrier - OK
  const handleChange = (date) => {
    setSelectDate(date);
    console.log(date);
  };

  //Fonction onClick pour confirmation RDV
  const handleAppointmentBooking = (time) => {
    setAvailableSlots({
      ...availableSlots,
      [selectDate]: availableSlots[selectDate],
    });
    alert("votre rdv est le " + { selectDate } + "à heure");
    console.log("Rendez-vous réservé pour le : ", selectDate);
  };

  return (
    <div className="rdv">
      <div className="containerTime">
        <div className="Timer">
          <ReactDatePicker action={handleChange} />
        </div>

        {selectedTime && (
          <div>
            <h3>Vous avez sélectionné {selectedTime}</h3>
            <button
              className="buttonReservez"
              onClick={handleAppointmentBooking}
            >
              Réservez
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentScheduler;
