
import React, { Component } from 'react';
import './App.css';
// import { v4 as uuidv4 } from 'uuid';
import ContactsList from './components/ContactsList.jsx';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter.jsx'



class App extends Component {


  state = {
    contacts: [],
    filter: "",
    filteredContacts: []
  };

  handleSubmit = ({ name, number }) => {
    this.setState(prevState => ({ contacts: [...prevState.contacts, { name, number }] }));
  }

  handleChangeFindInput = (ev) => {
    this.setState({
      filter: ev.target.value
    });
    this.setState({
      filteredContacts: this.handleFilter()
    })
  }

  handleFilter = () => this.contacts.filter




  render() {
    const { state, handleSubmit, handleChangeFindInput } = this

    return (<>
      <div>
        <h1>Phonebook</h1>

        <ContactForm
          handleSubmit={handleSubmit}
        />

        <h2>Contacts</h2>
        <Filter
          handleChangeFindInput={handleChangeFindInput}
        />

        <ContactsList
          contacts={state.contacts}
        />
      </div>
    </>)
  }

}

export default App;
