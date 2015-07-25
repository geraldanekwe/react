var React = require("react");
var ReactDOM = require("react-dom");
var ListOfGreetings = require("./components/ListOfGreetings");
var Form = require("./components/Form");

var App = React.createClass({
  getInitialState: function() {
    return { users: [], isEdit: false};
  },
  greet: function(user) {
    this.setState(
      { users: this.state.users.concat(user) }
    );
  },
  edit: function(){
    this.setState({isEdit: true});
  },
  save: function(index, newValue){
    this.state.users[index] = { name: newValue };
    this.state.isEdit = false;
    this.setState(
      { users: this.state.users }
    );
  },
  delete: function(index){
    this.state.users.splice(index, 1);

    this.setState(
        { users: this.state.users }
    );
  },
  render: function() {
    return (
      <div>
        <Form greet={this.greet} />
        <ListOfGreetings users={this.state.users} save={this.save}
          edit={this.edit} delete={this.delete} isEdit={this.state.isEdit} />
      </div>
    )
  }
});

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
