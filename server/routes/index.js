var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index')

/* GET home page. */
router.get('/', indexController.displayHomePage)

/* GET home page. */
router.get('/home', indexController.displayHomePage)

/* GET about page. */
router.get('/about', indexController.displayAboutPage)

/* GET projects page. */
router.get('/projects', indexController.displayProjectsPage)

/* GET services page. */
router.get('/services', indexController.displayServicesPage)

/* GET contact page. */
router.get('/contacts', indexController.displayContactPage)

/* GET ROUTE for displaying login page */
router.get('/login', indexController.displayLoginPage)

/* POST ROUTE for login page */
router.post('/login', indexController.processLoginPage)

/* GET Route for displaying the Register Page */
router.get('/register',  indexController.displayRegisterPage)

/* POST route for processing the register page */
router.post('/register', indexController.processRegisterPage)

/* PERFORM LOGOUT */
router.get('/logout', indexController.performLogout)

module.exports = router;
