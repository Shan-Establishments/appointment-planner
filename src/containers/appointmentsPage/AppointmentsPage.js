import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm.js";
import { TileList } from "../../components/tileList/TileList.js";

export const AppointmentsPage = ({
  contacts,
  appointments,
  addAppointment,
}) => {
  /*
  Defined state variables for 
  appointment info
  */
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState(
    contacts.length > 0 ? contacts[0].name : ""
  );
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Added contact info and clear data  
    */
    addAppointment(title, contact, date, time);
    setTitle("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          contact={contact}
          date={date}
          time={time}
          setTitle={setTitle}
          setContact={setContact}
          setDate={setDate}
          setTime={setTime}
          contacts={contacts}
          onSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList list={appointments} />
      </section>
    </div>
  );
};
