import React, { useState } from 'react';

function UserForm({ onAddContact }) {
  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone) {
      onAddContact({ name, email, phone });
      // Reset form
      setName('');
      setEmail('');
      setPhone('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone: </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Add Contact</button>
      </form>
    </div>
  );
}

export default UserForm;