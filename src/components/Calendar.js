import React, { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Calendrier(props) {
  const { action } = props;
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h3 className="Programmer">Programmer</h3>
      <div className="Calendar">
        <Calendar onChange={action} value={date} />
      </div>
    </div>
  );
}

export default Calendrier;
