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
        name="name"
        type="text"
        onChange={(n) => setName(n.target.value)}
        placeholder="Contact Name"
        required
      />

      <input
        value={phone}
        name="name"
        type="tel"
        required
        onChange={(p) => setPhone(p.target.value)}
        placeholder="Phone Number"
        pattern="^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$"
      />

      <input
        value={email}
        type="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
      />

      <input type="submit" value="Submit" />
    </form>
  );
};
