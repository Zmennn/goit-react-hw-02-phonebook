import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import style from './ContactsList.module.css';
import PropTypes from "prop-types";

class ContactsList extends Component{

    render() {
        return (
            <ul>        
                {
                    this.props.contacts.map(el => (<li key={uuidv4()} >
                    {el.name}:__{el.number}
                      </li>))
                }
        </ul>
    )}

}


export default ContactsList

ContactsList.propTypes = {
    contacts:PropTypes.array.isRequire
}