import React, { Component } from 'react';
import shortid from 'shortid';
import Contacts from 'components/Contacts';
import Phonebook from 'components/Phonebook';
import Filter from 'components/Filter';
import './App.css';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const repeatedContact = this.state.contacts.some(item =>
      item.name.includes(name),
    );

    if (repeatedContact) {
      alert(`${name} already in contacts`);
    } else {
      const contact = {
        id: shortid.generate(),
        name,
        number,
      };

      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContact = () => {
    const { contacts, filter } = this.state;
    const normalaizedContact = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalaizedContact),
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContact = this.getVisibleContact();

    return (
      <div className="App">
        <Phonebook onSubmit={this.addContact} />
        <Filter value={filter} onChange={this.changeFilter} />
        <Contacts
          contacts={visibleContact}
          ondeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
