import React, {useState} from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm"
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, contacts, newAppointment}) => {
  /*
  Defined state variables for 
  appointment info
  */
  const [ title, setTitle ] = useState("");
  const [ contact, setContact ] = useState("");
  const [ date, setDate ] = useState("");
  const [ time, setTime ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Added contact info and clear data  
    */
    newAppointment(title, contact, date, time);
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
            handleSubmit={handleSubmit}
            title={title}
            setTitle={setTitle}
            contact={contact}
            setContact={setContact}
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
            setContacts={setContact}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList lists={appointments} />
      </section>
    </div>
  );
};
