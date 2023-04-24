import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fr from "date-fns/locale/fr";

function ReactDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="input-search3">
      <div className="title-input-search">Date</div>
      <DatePicker
        className="datepicker"
        placeholderText="Quand ?"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        formatDate="dd/MM/yyyy"
        minDate={new Date()}
        locale={fr}
      />
    </div>
  );
}

export default ReactDatePicker;
