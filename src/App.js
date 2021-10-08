
import React, { Component } from 'react';
import './App.css';
// import { v4 as uuidv4 } from 'uuid';
import ContactsList from './components/ContactsList.jsx';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter.jsx'



class App extends Component {


  state = {
    contacts: []
  };

  handleSubmit = ({ name, number }) => {


    this.setState(prevState => ({ contacts: [...prevState.contacts, { name, number }] }));
    this.setState({
      name: '',
      number: ''
    })
  }




  render() {
    const { state, handleSubmit } = this

    return (<>
      <div>
        <h1>Phonebook</h1>

        <ContactForm
          handleSubmit={handleSubmit}
        />

        <h2>Contacts</h2>
        <Filter />


        <ContactsList
          contacts={state.contacts}
        />
      </div>
    </>)
  }

}

export default App;
