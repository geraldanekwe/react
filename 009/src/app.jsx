import React from "react";
import ReactDOM from "react-dom";

import { Form, ContactsList } from "./components/core";

import { fetchContacts, saveContact } from "./parse";

var App = React.createClass({
  getInitialState: function() {
    return { contacts: [] };
  },
  componentDidMount: function() {
    fetchContacts(this);
  },
  addContact: function(contact) {
    this.setState({
      contacts: this.state.contacts.concat(contact)
    }, saveContact(contact));
  },
  style: function() {
    return {
      color: 'green',
      fontSize: 40
    }
  },
  theme: function() {
    return localStorage["theme"] || 'light';
  },
  toggleTheme: function(theme) {
    localStorage["theme"] = this.theme() === "dark" ? "light" : "dark";
    this.forceUpdate();
  },
  updateContact: function(index, checked) {
    var contacts = this.state.contacts;
    contacts[index].checked = checked;

    this.setState({contacts: contacts});
  },
  deleteAllSelected: function() {
    var contacts = this.state.contacts;
    this.setState({
      contacts: contacts.filter(function(contact) { return !contact.checked; })
    });
  },
  render: function() {
    return (
      <div className={this.theme()}>
        <div className="container">
          <div style={this.style()}>Hello Styling</div>
          <Form addContact={this.addContact} />
          <ContactsList contacts={this.state.contacts} updateContact={this.updateContact} />
          <button type="button" className="btn" onClick={this.deleteAllSelected}>
            Delete All Selected
          </button>
          <a href="#" onClick={this.toggleTheme}>Toggle</a>
        </div>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function() {
  Parse.initialize("9FMzW6XcmSgAxPrVDeCTIoI9I8GyMWPKIFuEPwQW", "sbI3VMwZUuZrm8j6TVwz6382OAH1JzmTlE9GcUuu");
  ReactDOM.render(
    <App />,
    document.getElementById("root")
  );
})
