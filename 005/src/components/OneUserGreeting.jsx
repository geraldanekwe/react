var React = require("react");

var OneUserGreeting = React.createClass({
  handleDelete: function() {
    console.log(this.props.index);
    this.props.delete(this.props.index);
  },
  render: function() {
    return (
    <li>
      <a href={"mailto:" + this.props.user.email}>
        Hello {this.props.user.name}
      </a> -
      <button onClick={this.handleDelete}>Delete</button>
    </li>
  );
  }
});