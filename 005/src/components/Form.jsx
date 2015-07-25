var React = require("react");

var Form = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    this.props.greet({ name: this.refs.name2greet.value, email: this.refs.email2greet.value });
    this.refs.userForm.reset();
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit} ref="userForm">
        <input placeholder="Name" ref="name2greet" />
        <input type="email" placeholder="email" ref="email2greet" required/>
        <button type="submit">Greet</button>
      </form>
    )
  }
});
