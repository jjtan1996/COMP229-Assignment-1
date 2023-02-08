let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our user model
let Users = require('../models/user_db');

//GET router for the userdb list page - READ operation
router.get('/', (req, res, next) => {
    Users.find((err, userList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            console.log(userList[0]);
            res.render('users', {title: 'User List', userList: userList})
        }
    })
});

module.exports = router;