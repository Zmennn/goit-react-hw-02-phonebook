
import React, { Component } from 'react';
import './App.css';
// import { v4 as uuidv4 } from 'uuid';
import ContactsList from './components/ContactsList.jsx';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter.jsx'



class App extends Component {


  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: "",
    filteredContacts: [],
    regExp: ""
  };

  handleSubmit = ({ name, number }) => {
    this.setState(prevState => ({ contacts: [...prevState.contacts, { name, number }] }));
  }

  handleChangeFindInput = (ev) => {
    this.setState({
      filter: ev.target.value.toLowerCase()
    });
    this.setState({
      filteredContacts: this.handleFilter()
    })
  }

  handleFilter = () => {

    this.setState(prevState => ({
      regExp: new RegExp(`^${prevState.filter}`)
    }));


    this.state.contacts.filter((el) => {
      const arr = el.name.toLowerCase().split(" ");
      arr.forEach(word => console.log(word));
    })
  }
  // handleFilter = () => console.log(this.state.contacts);



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
