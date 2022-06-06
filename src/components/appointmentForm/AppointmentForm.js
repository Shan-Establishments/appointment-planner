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

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(t) => setTitle(t.target.value)}
        name="title"
        required
        placeholder="Appointment Title"
      />

      <input
        type="date"
        name="date"
        value={date}
        onChange={(d) => setDate(d.target.value)}
        min={getTodayString()}
        required
      />

      <input
        type="time"
        name="title"
        value={time}
        onChange={(t) => setTime(t.target.value)}
        required
      />

      <ContactPicker
        value={contact}
        name="contact"
        placeholder="Appointment with"
        contacts={contacts}
        onChange={(c) => setContact(c.target.value)}
      />

      <input type="submit" value="Submit" />
    </form>
  );
}
