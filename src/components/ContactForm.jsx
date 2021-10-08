import React, { Component } from 'react';
import PropTypes from "prop-types";


class ContactForm extends Component{

    state = {
    name: '',
    number: ''
    };
    
     handleChangeAllInput = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  };

  


render() {
    const { inputNameId, handleChangeAllInput, state } = this

    return (<>
        <form onSubmit={(e) => { e.preventDefault();this.props.handleSubmit(state) }}>
        <label htmlFor={inputNameId}>Title</label>
        <input
          id={inputNameId}
          value={state.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChangeAllInput}
        />

        <input
          value={state.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChangeAllInput}
        />

        <button
          type="submit"
        >Add contact</button>
      </form>


    </>)
  }
}

export default ContactForm

ContactForm.propTypes = {
    handleSubmit: PropTypes.any.isRequired
}