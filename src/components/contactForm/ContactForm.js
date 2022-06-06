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
  const addName = ({ target }) => {
    setName(target.value);
  };
  const addPhone = ({ target }) => {
    setPhone(target.value);
  };
  const addEmail = ({ target }) => {
    setEmail(target.value);
  };
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
        pattern="^\s*\(?(020[7,8]{1}\)?[ ]?[1-9]{1}[0-9{2}[ ]?[0-9]{4})|(0[1-8]{1}[0-9]{3}\)?[ ]?[1-9]{1}[0-9]{2}[ ]?[0-9]{3})\s*$"
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
