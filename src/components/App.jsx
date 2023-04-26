import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = e => {
    e.preventDefault();
    const {
      name: { value: name },
      number: { value: number },
    } = e.target;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts.`);
    }

    const contactObj = {
      name,
      number,
      id: nanoid(),
    };

    setContacts(prevContacts => [...prevContacts, contactObj]);

    Array.from(e.target).forEach(e => (e.value = ''));
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const renderContacts = () => {
    if (filter) {
      const normalizedFilter = filter.toLowerCase();
      const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
      return filteredContacts;
    }
    return contacts;
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h1>Contacts</h1>
      <Filter
        onFilterElements={e => setFilter(e.target.value)}
        value={filter}
      />
      {contacts.length ? (
        <ContactList
          contacts={renderContacts()}
          onClickDeleteBtn={deleteContact}
        />
      ) : (
        <p style={{ paddingLeft: '40px' }}>Please add at least 1 contact</p>
      )}
    </>
  );
};
