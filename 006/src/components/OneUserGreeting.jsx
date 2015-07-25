var React = require("react");

export default React.createClass({
  render: function () {
    return (
      <li>
        <a href={"mailto:" + this.props.user.email}>Hello {this.props.user.name}</a>
      </li>
    );
  }
});
