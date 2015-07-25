import React from "react";
import OneUserGreeting from "./OneUserGreeting";

export class ListOfGreetings extends React.Component {
  render() {
      let usersLIs = this.props.users.map((user, i) => {
        return <OneUserGreeting user={user} key={i} />;
      });
      return (
        <div>
          <ul>
            {usersLIs}
          </ul>
        </div>
      );
  }
}

export class Form extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    this.props.greet({ name: this.refs.name2greet.value, email: this.refs.email2greet.value });
    this.refs.userForm.reset();
  }
  render() {
    return (
      <div className="card-panel hoverable grey lighten-3">
        <form onSubmit={this.handleSubmit.bind(this)} ref="userForm" >
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input type="text" ref="name2greet" id="name" required />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" ref="email2greet" id="email" required />
          </div>
          <button type="submit" className="btn-floating btn-large waves-effect waves-light red">
            <i className="material-icons">add</i>
          </button>
        </form>
      </div>
    )
  }
}
