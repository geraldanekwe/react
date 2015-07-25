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
