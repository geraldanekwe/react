var React = require("react");
var ReactDOM = require("react-dom");

var ListOfGreetings = require("./components/ListOfGreetings");
var Form = require("./components/Form");

var App = React.createClass({
  getInitialState: function() {
    return { users: []};
  },
  greet: function(user) {
    this.setState(
      { users: this.state.users.concat(user) }
    );
  },
  delete: function(index){
    this.state.users.splice(index, 1)

    this.setState(
        { users: this.state.users }
    );
  },
  render: function() {
    return (
      <div>
        <Form greet={this.greet} />
        <ListOfGreetings users={this.state.users} delete={this.delete}/>
      </div>
    )
  }
});


ReactDOM.render(
  <App />,
  document.getElementById("root")
);
