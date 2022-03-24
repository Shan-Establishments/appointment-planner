import React from "react";

export const ContactPicker = ({ contacts, setContact }) => {
  return (
    <select value={contacts} onChange={(e) => setContact(e.target.value)}>
      {contacts &&
        contacts.map((contact, index) => (
          <option key={index} value={contact.name}>
            {contact.name}
          </option>
        ))}
    </select>
  );
};
