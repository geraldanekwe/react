var React = require("react");

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
});
