var Hello = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.greeting} {this.props.name}
      </div>
    );
  }
})

React.render(
<Hello name="Ryan" greeting="Hello" />,
document.getElementById("root")
);
