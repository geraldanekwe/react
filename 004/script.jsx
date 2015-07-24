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


var ListOfGreetings = React.createClass({
  render: function() {
    var deleteFN = this.props.delete;
    var usersLIs = this.props.users.map(function(user, i){
      return <OneUserGreeting user={user} key={i} index={i} delete={deleteFN} />;
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


React.render(
  <App />,
  document.getElementById("root")
);
