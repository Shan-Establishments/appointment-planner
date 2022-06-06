import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  const addName = ({target}) => {
    setName(target.value);
  }
  const addPhone = ({target}) => {
    setPhone(target.value);
  }
  const addEmail = ({target}) => {
    setEmail(target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        name="name"
        type="text"
        onChange={addName}
        placeholder="Contact Name"
        required
      />

      <input
        value={phone}
        name="name"
        type="tel"
        required
        onChange={addPhone}
        placeholder="Phone Number"
        pattern="^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$"
      />

      <input
        value={email}
        type="email"
        name="email"
        onChange={addEmail}
        placeholder="your@email.com"
        required
      />

      <input type="submit" value="Submit" />
    </form>
  );
};
