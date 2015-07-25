import React from "react";
import ReactDOM from "react-dom";

import { Form, ListOfGreetings } from "./components/core";

var App = React.createClass({
  getInitialState: function() {
    return { users: [] };
  },
  greet: function(user) {
    this.setState({
      users: this.state.users.concat(user)
    });
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
  render: function() {
    return (
      <div className={this.theme()}>
        <div className="container">
          <div style={this.style()}>Hello Styling</div>
          <Form greet={this.greet} />
          <ListOfGreetings users={this.state.users} />
            <a href="#" onClick={this.toggleTheme}>Toggle</a>
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
})
