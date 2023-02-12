let mongoose = require('mongoose')

// create a model class
let userModel = mongoose.Schema({
    Name: String,
    Email: String,
    Contact: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('users', userModel);
