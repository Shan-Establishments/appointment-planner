import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm.js";
import { TileList } from "../../components/tileList/TileList.js";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Defined state variables for 
  contact info and duplicated check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Added contact info and cleared data
    if the contact name is not a duplicate
    */
    if (!duplicate) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  /*
  Checking for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    const isNotDuplicate = contacts.every((contact) => contact.name !== name);
    setDuplicate(!isNotDuplicate);
  }, [contacts, name]);

  return (
    <div>
      <section>
        <h2>Add Contact {duplicate ? "This name already exists" : ""}</h2>
        <ContactForm
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
