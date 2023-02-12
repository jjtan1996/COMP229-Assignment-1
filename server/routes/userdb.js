let express = require('express');
let passport = require('passport');

let router = express.Router();
let mongoose = require('mongoose');


/*connect to our user model
let Users = require('../models/user_db');*/
let userController = require("../controllers/usersdb");

//helper function for guarding route
function requireAuth(req, res, next){
    //checking if user is logged in
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next(); 
}

//GET router for the userdb list page - READ operation
router.get('/', userController.displayUserList)

/* GET route for displaying ADD page - CREATE Operation */
router.get('/add', requireAuth, userController.displayAddPage)

/* POST route for processing ADD page - CREATE Operation */
router.post('/add', requireAuth, userController.processAddPage);

/* GET route for displaying EDIT page - UPDATE Operation */
router.get('/edit/:id', requireAuth, userController.displayEditPage);

/* POST route for processing EDIT page - UPDATE Operation */
router.post('/edit/:id', requireAuth, userController.processEditPage);

/* GET route for Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, userController.processDeletePage);

module.exports = router;