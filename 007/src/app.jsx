import React from "react";
import ReactDOM from "react-dom";

import { Form, ListOfGreetings } from "./components/core";

var App = React.createClass({
  getInitialState: function() {
    return { contacts: [ {name: 'Trey'}, {name: 'Gerald'}, {name: 'Son'}], theme: 'white' };
  },
  addContact: function(contact) {
    this.setState({
      contacts: this.state.contacts.concat(contact)
    });
  },
  theme: function() {
    return localStorage["theme"] || 'light';
  },
  changeTheme: function(theme) {
    localStorage["theme"] = this.theme() === "dark" ? "light" : "dark";
    this.forceUpdate();
  },
  render: function() {
    return (
      <div className={this.theme()}>
      <div className="container">
        <Form addContact={this.addContact} />
        <ListOfGreetings contacts={this.state.contacts} />
        <button onClick={this.changeTheme}>Toggle</button>
      </div>
    </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <App />,
    document.getElementById("root")
  );
});
