var React = require("react");

var OneContact = React.createClass({
  render: function () {
    return (
      <li>
        <input type="checkbox" />
        <a href={"mailto:" + this.props.contact.email}>{this.props.contact.name}</a>
      </li>
    );
  }
});

module.exports = OneContact;
