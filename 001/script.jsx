var Hello = React.createClass({
  render: function() {
    return <h1>Hello from Component</h1>;
  }
});

var Goodbye = React.createClass({
  render: function() {
    var greetings = ["Hello", "Hi", "Welcome"];
    var names = ["Gerald", "Dan", "Trey", "Ryan", "dude", "person", "maybe", "endless"];
    var hellos = [];

    for(var i = 0; i < names.length; i++){
      hellos.push(<h1 key={i}>{greetings[i%greetings.length]} {names[i]}</h1>)
    };

    return (
      <div>
        {hellos}
      </div>
    );
  }
})

React.render(
<Goodbye />,
document.getElementById("root")
);
