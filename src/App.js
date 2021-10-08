
import React, { Component } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import ContactsList from './components/ContactsList.jsx';
import ContactForm from './components/ContactForm';




class App extends Component {
  newId = uuidv4()

  state = {
    contacts: []
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    this.setState(prevState => ({ contacts: [...prevState.contacts, { name: prevState.name, number: prevState.number }] }));
    this.setState({
      name: '',
      number: ''
    })
  }




  render() {
    const { state, handleSubmit } = this

    return (<>

      <ContactForm
        handleSubmit={handleSubmit}
      />


      <ContactsList
        contacts={state.contacts}
      />

    </>)
  }

}

export default App;
