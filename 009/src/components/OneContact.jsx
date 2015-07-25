var React = require("react");

export default React.createClass({
  handleChange: function(event) {
    this.props.updateContact(this.props.index, !this.props.contact.checked);
  },
  render: function () {
    let uniqId = `cb-${this.props.index}`;
    return (
      <li>
        <p>
          <input id={uniqId} type="checkbox"
                 checked={this.props.contact.checked}
                 onChange={this.handleChange} />
          <label htmlFor={uniqId}>
            <a href={"mailto:" + this.props.contact.email}>{this.props.contact.name}</a>
          </label>
        </p>
      </li>
    );
  }
});
