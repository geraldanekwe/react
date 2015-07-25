var React = require("react");

var EditField = React.createClass({
  save: function(){
    var newValue = this.refs.editInput.value;
    var index = this.props.index;
    this.props.save(index, newValue);
  },
  render: function(){
    var editField = <input type='text' ref='editInput'/>;
    var saveEdit = <button onClick={this.save}>Save</button>;
    return(
      <div>
        {editField}
        {saveEdit}
      </div>
    )
  }
})

module.exports = EditField;
