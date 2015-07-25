var React = require("react");
var OneUserGreeting = require("./OneUserGreeting");

var ListOfGreetings = React.createClass({
  render: function() {
    var deleteFn = this.props.delete;
    var usersLIs = this.props.users.map(function(user, i){
      return <OneUserGreeting user={user} key={i} index={i} delete={deleteFn} />;
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

module.exports = ListOfGreetings;
