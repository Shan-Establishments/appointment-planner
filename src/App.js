import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage.js";
import { ContactsPage } from "./containers/contactsPage/ContactsPage.js";

function App() {
  /*
  Defined state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (name, phone, email) => {
    setContacts((lastState) => {
      return [
        ...lastState,
        {
          name,
          phone,
          email,
        },
      ];
    });
  };

  const addAppointment = (title, contact, date, time) => {
    setAppointments((lastState) => [
      ...lastState,
      {
        title,
        contact,
        date,
        time,
      },
    ]);
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" element={<Redirect to={ROUTES.CONTACTS} />} />
          <Route
            path={ROUTES.CONTACTS}
            /* Added props to Contact Page */
            element={
              <ContactsPage contacts={contacts} addContact={addContact} />
            }
          />
          <Route
            path={ROUTES.APPOINTMENTS}
            /* Added props to AppointmentsPage */
            element={
              <AppointmentsPage
                appointments={appointments}
                contacts={contacts}
                addAppointment={addAppointment}
              />
            }
          />
        </Switch>
      </main>
    </>
  );
}

export default App;
