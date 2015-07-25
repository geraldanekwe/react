var React = require("react");
var EditField = require("./EditField");

var OneUserGreeting = React.createClass({

  handleEdit: function() {
    this.props.edit();
  },
  handleDelete: function() {
    this.props.delete(this.props.index);
  },
  render: function() {
    var isEdit = this.props.isEdit;
    var index = this.props.index;
    var save = this.props.save;
    var field = isEdit ? <EditField index={index} save={save}/> : <a href={"mailto:" + this.props.user.email}>Hello {this.props.user.name}</a>;
    return (
    <li>
      {field} -
      <button onClick={this.handleEdit}>Edit</button>
      <button onClick={this.handleDelete}>Delete</button>
    </li>
  );
  }
});

module.exports = OneUserGreeting;
