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
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        value={phone}
        placeholder="Phone Number"
        onChange={(e) => setPhone(e.target.value)}
        pattern="^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$"
        required
      />

      <input
        value={email}
        placeholder="your@email.com"
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input type="submit" value="Submit" />
    </form>
  );
};
