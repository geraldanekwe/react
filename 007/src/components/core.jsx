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
      <div>
      <form onSubmit={this.handleSubmit.bind(this)} ref="userForm" >
        <input type="text" placeholder="Name" ref="name2greet" required />
        <input type="email" placeholder="Email" ref="email2greet" required />
        <button type="submit" className="btn">Greet</button>
      </form>
    </div>
    )
  }
}
