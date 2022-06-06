import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {
  return (
    <select name="contact" onChange={onChange} defaultValue="">
      <option key="default" value="">
        Contact has not been selected
      </option>
      {contacts.map((contact) => (
        <option value={contact.name} key={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );
};
