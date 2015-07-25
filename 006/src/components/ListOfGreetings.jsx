import React from "react";
import OneUserGreeting from "./OneUserGreeting";

export default class ListOfGreetings extends React.Component {
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
