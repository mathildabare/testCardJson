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
  .post(BlogController.createArticleUser)

router.route("/article/:id")
  .get(BlogController.pageArticleID)
  .post(BlogController.createComment)

/*  ********************  */

// CONTACT
router.route("/contact")
  .get(ContactController.contactpage)
  .post(ContactController.createMessage);


/*  ********************  */


// AUTHENTICATION
router.route('/login')
  .get(LogController.loginpage)
  .post(LogController.loginData)

router.route('/register')
  .get(LogController.registerpage)
  .post(LogController.createUser)

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

router.route('/admin/bio/:id')
  .put(AdminController.userBio)


router.route('/admin/users/:id')
  .put(AdminController.editUserID)


router.route('/admin/articles/:id')
  .post(AdminController.createArticleID)
  .put(AdminController.editArticleID)
  .delete(AdminController.deleteArticleID)


router.route('/admin/messages/:id')
  .delete(AdminController.deleteMessageID)


//Export du Router
module.exports = router;

// 