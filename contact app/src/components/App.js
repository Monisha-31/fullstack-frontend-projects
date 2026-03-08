import React, { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

function App() {
  // State to hold the list of contacts (array of objects)
  const [contacts, setContacts] = useState([]);

  // Function to add a new contact to the list
  const addContact = (newContact) => {
    setContacts([...contacts, { ...newContact, id: Date.now() }]); // Add unique ID
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Contact Cards App</h1>
      <UserForm onAddContact={addContact} />
      <UserList contacts={contacts} />
    </div>
  );
}

export default App;