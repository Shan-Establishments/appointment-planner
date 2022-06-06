import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker.js";

export function AppointmentForm({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
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
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="text"
        value={getTodayString()}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />

      <ContactPicker
        contacts={contacts}
        contact={contact}
        setContact={setContact}
      />

      <input type="submit" value="Submit" />
    </form>
  );
}
