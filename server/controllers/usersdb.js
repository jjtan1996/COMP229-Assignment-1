var express = require('express');
var router = express.Router();

let mongoose = require('mongoose');

//create a reference to the model;
let Users = require('../models/user_db');

module.exports.displayUserList = (req, res, next) => {
    Users.find((err, userList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            console.log(userList);
            res.render('user/list', 
            {title: 'Users', 
            userList: userList, 
            displayName: req.user ? req.user.displayName : ''});
        }
    })
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('user/add', {title: 'Add User',
    displayName: req.user ? req.user.displayName : ''})
}

module.exports.processAddPage = (req, res, next) => {
    let newUser = Users({
        "Name": req.body.Name,
        "Email": req.body.Email,
        "Contact": req.body.Contact
    });

    Users.create(newUser, (err, Users) => {
        if(err){
            console.log(err);
            res.end(err);
        }else{
            //refresh the users 
            res.redirect("/user-lists");
        }
    })
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id; //id of the object

    Users.findById(id, (err, userToEdit) => {
        if(err){
            console.log(err);
            res.end(err);
        }else{
            //show the edit view
            res.render('user/edit', {title: 'Edit User', 
            user: userToEdit,
            displayName: req.user ? req.user.displayName : ''});
        }
    })
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;
    let updatedUser = Users({
        "_id": id,
        "Name": req.body.Name,
        "Email": req.body.Email,
        "Contact": req.body.Contact
    });

    Users.updateOne({_id: id}, updatedUser, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }else{
            //refresh the booklist
            res.redirect('/user-lists');
        }
    })
}

module.exports.processDeletePage = (req, res, next) => {
    let id = req.params.id;

    Users.remove({_id: id}, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/user-lists');
        }
    })
}