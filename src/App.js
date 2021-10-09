import React, { Component } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import ContactsList from './components/ContactsList.jsx';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter.jsx';



class App extends Component {

  state = {
    contacts: [

    ],
    filter: [],

  };

  filterStatus = false;

  handleSubmit = ({ name, number }) => {
    if (!this.state.contacts.find(el => el.name === name)) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { name, number, id: uuidv4() }]
      }))
    } else { alert(`${name} is already in contacts`) }
  };


  handleChangeFindInput = (ev) => {

    const regExp = new RegExp(`^${ev.target.value.toLowerCase()}`);
    this.filterStatus = ev.target.value === "" ? false : true,

      this.setState({

        filter: this.handleFilter(regExp)
      })
  };


  handleFilter = (regExp) => {
    return this.state.contacts.filter((el) => {

      const arr = el.name.toLowerCase().split(" ");

      for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().match(regExp) !== null) {
          return true
        }
      }
      return false
    })
  };


  handleDelete = (ev) => {

    this.setState(prevState => ({
      contacts: prevState.contacts.filter(elem => elem.id !== ev.target.id)
    }))
  }


  render() {

    const { state, handleSubmit, handleChangeFindInput, handleDelete, filterStatus } = this

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
          contacts={filterStatus ? state.filter : state.contacts}
          handleDelete={handleDelete}
          deleteStatus={filterStatus ? false : true}
        />
      </div>
    </>)
  }
}

export default App;
