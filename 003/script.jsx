var OneUserGreeting = React.createClass({
  render: function() {
    return <li>Hello {this.props.name}</li>;
  }
});

var ListOfGreetings = React.createClass({
  render: function() {
    var usersLIs = this.props.users.map(function(name, i){
      return <OneUserGreeting name={name} key={i} />;
    })
    return (
      <div>
        <ul>
          {usersLIs}
        </ul>
      </div>
    );
  }
})

var Form = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    this.props.greet(this.refs.name2greet, this.refs.email2greet);
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Name" ref="name2greet" required/>
        <input placeholder="email" ref="email2greet" required/>
        <button type="submit">Greet</button>
      </form>
    )
  }
});

var App = React.createClass({
  getInitialState: function() {
    return { users: []};
  },
  greet: function(nameInput, emailInput) {
  // name = this.refs.name2greet
    window.location.href = "mailto:" + emailInput.value;

    this.setState(
      { users: this.state.users.concat(nameInput.value) },
      function() {
        nameInput.value = '';
      }
    );
  },
  render: function() {
    return (
      <div>
        <Form greet={this.greet} />
        <ListOfGreetings users={this.state.users}/>
      </div>
    )
  }
});


React.render(
  <App />,
  document.getElementById("root")
);
