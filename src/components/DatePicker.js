import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ReactDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div>
      <DatePicker
        className="search_input"
        placeholderText="Quand ?"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        formatDate="dd/MM/yyyy"
        minDate={new Date()}
      />
    </div>
  );
}

export default ReactDatePicker;
