
/*
 * IMPORTS
 * ************************** */


const express = require("express");
const router = express.Router();

// Import des controllers
const HomeController = require("./controllers/HomeController");
const ContactController = require("./controllers/ContactController");
const BlogController = require("./controllers/BlogController");
const AuthController = require('./controllers/AuthController')
const AdminController = require('./controllers/AdminController')

// Multer
const uploadArticles = require("./config/multer-articles");
const uploadUsers = require("./config/multer-users");

// Middlewares
const mdl = require('./middlewares/userStatus')



/*
 * ROUTES
 * ************************** */



/*  ********* HOME **********  */

router.route("/")
  .get(HomeController.homepage)
  .post(HomeController.createMessage)



/*  ********* BLOG **********  */

// BLOG
router.route("/article")
  .get(BlogController.articlepage)
  .post(uploadArticles.single('img'), BlogController.createArticleUser)

router.route("/article/:id") // --> '/' = params, + ':id' = params.id
  .get(BlogController.pageArticleID)
  .post(BlogController.createComment)



/*  ******** CONTACT *********  */

// CONTACT
router.route("/contact")
  .get(ContactController.contactpage)
  .post(ContactController.createMessage);



/*  ***** AUTHENTICATION *****  */

// AUTHENTICATION
router.route('/login')
  .get(AuthController.loginpage)
  .post(AuthController.loginData)

router.route('/register')
  .get(AuthController.registerpage)
  .post(uploadUsers.single('avatar'), AuthController.createUser)

router.route('/newPW')
  .get(AuthController.newpasswordpage)
  .post(AuthController.resetPassword)

router.route('/forgotPW')
  .get(AuthController.forgotpasswordpage)
  .post(AuthController.forgotPassword)

router.route('/user')
  .get(AuthController.userProfile)

router.route('/user/:id')
  .put(uploadUsers.single('avatar'), AuthController.editUser)

router.route('/logout')
  .get(AuthController.logout)



/*  ******** ADMIN *********  */

// ADMIN
router.route('/admin')
  .get(AdminController.get)

router.route('/admin/:id')
  .put(uploadUsers.single('avatar'), AuthController.editUser)

router.route('/admin/ban/users/:id')
  .put(AdminController.banUserID)

router.route('/admin/users/:id')
  .put(AdminController.editUserID)

router.route('/admin/articles')
  .post(uploadArticles.single('img'), AdminController.createArticleAdmin)

router.route('/admin/articles/:id')
  .put(uploadArticles.single('img'), AdminController.editArticleID)
  .delete(AdminController.deleteArticleID)

router.route('/admin/comments/:id')
  .delete(AdminController.deleteCommentID)

router.route('/admin/messages/:id')
  .delete(AdminController.deleteMessageID)



/*** EXPORT DU ROUTER *** */

module.exports = router;