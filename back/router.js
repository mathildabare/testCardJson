// Import de module
const express = require("express");
const router = express.Router();

// Import des controllers
const HomeController = require("./controllers/HomeController");
const ContactController = require("./controllers/ContactController");
const BlogController = require("./controllers/BlogController");
const LogController = require('./controllers/LogController')
const AdminController = require('./controllers/AdminController')

// Middleware
const mdl = require("./middleware/coucou");



/** ROUTES **/



// HOME
router.route("/")
  .get(mdl.coucou, HomeController.homepage)
  .post(HomeController.createMessage)

/*  ********************  */

// BLOG
router.route("/article")
  .get(BlogController.articlepage)

router.route("/article/:id")
  .get(BlogController.pageArticleID)

/*  ********************  */

// CONTACT
router.route("/contact")
  .get(ContactController.contactpage)
  .post(ContactController.createMessage);


// SOCIETY
router.route('/society')
  .get(ContactController.societypage);

  
/*  ********************  */


// AUTHENTICATION
router.route('/login')
  .get(LogController.loginpage);

router.route('/register')
  .get(LogController.registerpage)
  .post(LogController.createAccount)

router.route('/newPW')
  .get(LogController.newpasswordpage)
  .post(LogController.resetPassword)

router.route('/forgotPW')
  .get(LogController.forgotpasswordpage)
  .post(LogController.forgotPassword)



/*  ********************  */


// ADMIN
router.route('/admin')
  .get(AdminController.get)
  // .post(AdminController.createArticle);



//Export du Router
module.exports = router;