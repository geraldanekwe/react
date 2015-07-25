import React from "react";
import OneContact from "./OneContact";

export class ContactsList extends React.Component {
  render() {
      let contactsLIs = this.props.contacts.map((contact, i) => {
        return <OneContact contact={contact} updateContact={this.props.updateContact} key={i} index={i} />;
      });
      return (
        <div className="card-panel hoverable grey lighten-3" >
          <ul>
            {contactsLIs}
          </ul>
        </div>
      );
  }
}

export class Form extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    this.props.addContact({ name: this.refs.name.value, email: this.refs.email.value });
    this.refs.contactForm.reset();
  }
  render() {
    return (
      <div className="card-panel hoverable grey lighten-3">
        <form onSubmit={this.handleSubmit.bind(this)} ref="contactForm" >
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input type="text" ref="name" id="name" required />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" ref="email" id="email" required />
          </div>
          <button type="submit" className="btn-floating btn-large waves-effect waves-light red">
            <i className="material-icons">add</i>
          </button>
        </form>
      </div>
    )
  }
}
