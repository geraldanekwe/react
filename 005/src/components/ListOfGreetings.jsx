var React = require("react");
var OneUserGreeting = require("./OneUserGreeting");

var ListOfGreetings = React.createClass({
  render: function() {
    var deleteFn = this.props.delete;
    var editFn = this.props.edit;
    var isEdit = this.props.isEdit;
    var saveFn = this.props.save;
    var usersLIs = this.props.users.map(function(user, i){
      return <OneUserGreeting user={user} key={i} index={i} save={saveFn}
            delete={deleteFn} edit={editFn} isEdit={isEdit}/>;
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
