import React, { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calendrier = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div>
      <h3 className="Programmer">Programmer</h3>
      <div className="Calendar">
        <Calendar onChange={onChange} value={date} />
      </div>
    </div>
  );
};

export default Calendrier;
