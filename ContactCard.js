import React from 'react';

function ContactCard({ contact }) {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '10px',
        width: '200px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      }}
    >
      <h3>{contact.name}</h3>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
    </div>
  );
}

export default ContactCard;