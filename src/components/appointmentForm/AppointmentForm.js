import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker.js";

export function AppointmentForm({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
  const addTitle = ({target}) => {
    setTitle(target.value);
  }
  const addDate = ({target}) => {
    setDate(target.value);
  }
  const addTime = ({target}) => {
    setTime(target.value);
  }
  const addContact = ({target}) => {
    setContact(target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={addTitle}
        name="title"
        required
        placeholder="Appointment Title"
      />

      <input
        type="date"
        name="date"
        value={date}
        onChange={addDate}
        min={getTodayString()}
        required
      />

      <input
        type="time"
        name="title"
        value={time}
        onChange={addTime}
        required
      />

      <ContactPicker
        value={contact}
        name="contact"
        placeholder="Appointment with"
        contacts={contacts}
        onChange={addContact}
      />

      <input type="submit" value="Submit" />
    </form>
  );
}
