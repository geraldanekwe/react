import React from "react";
import ReactDOM from "react-dom";
import ListOfGreetings from "./components/ListOfGreetings";

var OneUserGreeting = require("./components/OneUserGreeting");

var Form = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();
    this.props.greet({ name: this.refs.name2greet.value, email: this.refs.email2greet.value });
    this.refs.userForm.reset();
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit} ref="userForm" >
        <input placeholder="Name" ref="name2greet" required />
        <input type="email" placeholder="Email" ref="email2greet" required />
        <button type="submit">Greet</button>
      </form>
    )
  }
});

var App = React.createClass({
  getInitialState: function() {
    return { users: [] };
  },
  greet: function(user) {
    this.setState({
      users: this.state.users.concat(user)
    });
  },
  render: function() {
    return (
      <div>
        <Form greet={this.greet} />
        <hr />
        <ListOfGreetings users={this.state.users} />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
