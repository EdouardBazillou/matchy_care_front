import React, { useState } from "react";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import fr from "date-fns/locale/fr";

//Moment.js
import moment from "moment";
import "moment/locale/fr";

function ReactDatePicker(props) {
  //Récupérer la date et l'heure via des props utilisé dans Appointment.js
  const { action } = props;
  const { dateProps } = props;
  //Moment pour insertion du format de la date
  const timestamp = new Date();
  const momentTimestamp = moment(timestamp).format("DD/MM/YYYY");

  //À FAIRE
  //1. FETCH GET mes dates par le back puis les stocker dans une variable d'état
  //2. récuperer le tableau et le tester dans excludeDates

  return (
    <div className="input-search3">
      <DatePicker
        excludeDates={[new Date()]}
        className="datepicker"
        placeholderText="Quand ?"
        selected={dateProps}
        onChange={action}
        formatDate={momentTimestamp}
        showTimeSelect
        timeFormat="p"
        minDate={new Date()}
        locale={fr}
      />
    </div>
  );
}

export default ReactDatePicker;
