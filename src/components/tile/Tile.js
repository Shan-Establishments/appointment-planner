import React from "react";


export const Tile = ({contact, appointment}) => {
  const list = () => {
  if(contact) {
    return (
      <div>
        <p className="tile-title">Name: {contact.name}</p>
        <p className="tile">Phone: {contact.phone}</p>
        <p className="tile">Email: {contact.email}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p className="tile-title">Title: {appointment.title}</p>
        <p className="tile">Contact: {appointment.contact}</p>
        <p className="tile">Date: {appointment.date}</p>
        <p className="tile">Time: {appointment.time}</p>
      </div>
    );
  }
}
  return (
    <div className="tile-container">
      {list()}
    </div>
  );
};
