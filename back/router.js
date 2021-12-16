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
  .get(mdl.coucou, HomeController.homepage);


/*  ********************  */


// BLOG
router.route("/article")
  .get(BlogController.articlepage)
  .post(BlogController.createArticle)

router.route("/article/:id")
  .get(BlogController.pageArticleID)
  .put(BlogController.editArticle)
  .delete(BlogController.deleteArticle);


/*  ********************  */


// CONTACT
router.route("/contact")
  .get(ContactController.contactpage)
  .post(ContactController.createMessage);

router
  .route("/contact/:id")
  .put(ContactController.editMessage)



// SOCIETY
router.route('/society')
  .get(ContactController.societypage);

router.route('/contact')
  .get(ContactController.contactpage)
  .post(ContactController.createMessage);


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


module.exports = router;