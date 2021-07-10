import React, { Component } from 'react';
import shortid from 'shortid';
// import Contacts from 'components/Contacts';
import Phonebook from 'components/Phonebook';
import './App.css';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = ({ name }) => {
    const contact = {
      id: shortid.generate(),
      name,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Phonebook onSubmit={this.addContact} />
        <div>
          <h2>Contacts</h2>
        </div>
      </div>
    );
  }
}
