import React, { useState } from "react";
import "./Appointment.css";
import Calendrier from "./Calendar";

const AppointmentScheduler = () => {
  const [selectedTime, setSelectedTime] = useState([]);
  const [selectDate, setSelectDate] = useState([]);

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleAppointmentBooking = () => {
    // ici vous pouvez utiliser la plage horaire sélectionnée pour réserver un rendez-vous
    console.log("Rendez-vous réservé pour ", selectedTime);
  };

  return (
    <div className="rdv">
      <div className="Price">
        <p>A partir de</p>
        <p> € /heure</p>
      </div>
      <Calendrier />
      <div className="containerTime">
        <h3>Horaires</h3>
        <div className="Timer">
          <button className="buttonTime" onClick={() => handleTimeClick("8h")}>
            8h
          </button>
          <button className="buttonTime" onClick={() => handleTimeClick("9h")}>
            9h
          </button>
          <button className="buttonTime" onClick={() => handleTimeClick("10h")}>
            10h
          </button>
          <button className="buttonTime" onClick={() => handleTimeClick("11h")}>
            11h
          </button>
          <button className="buttonTime" onClick={() => handleTimeClick("13h")}>
            13h
          </button>
          <button className="buttonTime" onClick={() => handleTimeClick("14h")}>
            14h
          </button>
          <button className="buttonTime" onClick={() => handleTimeClick("15h")}>
            15h
          </button>
          <button className="buttonTime" onClick={() => handleTimeClick("16h")}>
            16h
          </button>
          <button className="buttonTime" onClick={() => handleTimeClick("17h")}>
            17h
          </button>
          <button className="buttonTime" onClick={() => handleTimeClick("18h")}>
            18h
          </button>
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
