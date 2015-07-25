var ContactObject = Parse.Object.extend("ContactObject");

export let fetchContacts = (component) => {
  let query = new Parse.Query(ContactObject);
  query.find({
    success: (results) => {
      component.setState({
        contacts: results.map(function(o) { return o.attributes; })
      });
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
}

export let saveContact = (contact) => {
  var parseContact = new ContactObject();
  parseContact.save(contact, {
    success: function(savedContact){
      console.log(savedContact);
  },
    error: function(savedContact, error) {
      console.log(error);
    }
  });
}
