let mongoose = require('mongoose')

// create a model class
let userModel = mongoose.Schema({
    Name: String,
    Email: String,
    Password: String
},
{
    collection: "user_db"
});

module.exports = mongoose.model('users', userModel);
