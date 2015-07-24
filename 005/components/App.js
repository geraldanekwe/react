var React = require("react");

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
    this.setState(
        { users: this.state.users.splice(index, 1) }
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
