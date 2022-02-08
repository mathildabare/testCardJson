// Import de module
const express = require("express");
const router = express.Router();

// Import des controllers
const HomeController = require("./controllers/HomeController");
const ContactController = require("./controllers/ContactController");
const BlogController = require("./controllers/BlogController");
const AuthController = require('./controllers/AuthController')
const AdminController = require('./controllers/AdminController')

// Middleware
const uploadArticles = require("./config/multer-articles");
const uploadUsers= require("./config/multer-users");





const mdl = require('./middlewares/userStatus')

/** ROUTES **/


// HOME
router.route("/")
  .get(HomeController.homepage)
  .post(HomeController.createMessage)



/*  ********************  */

// BLOG
router.route("/article")
  .get(BlogController.articlepage)
  .post(BlogController.createArticleUser)

router.route("/article/:id") // --> '/' = params, + ':id' = params.id
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
  .get(AuthController.loginpage)
  .post(AuthController.loginData)

router.route('/register')
  .get(AuthController.registerpage)
  .post(AuthController.createUser)

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


/*  ********************  */


// ADMIN
router.route('/admin')
  .get(AdminController.get)

router.route('/admin/bio/:id')
  .put(AdminController.userBio)


router.route('/admin/users/:id')
  .put(AdminController.editUserID)
  // .put(AdminController.banUserID)

  // router.route('/admin/ban/users/:id')



router.route('/admin/articles')
  .post(uploadArticles.single('img'), AdminController.createArticleAdmin)


router.route('/admin/articles/:id')
  .put(uploadArticles.single('img'), AdminController.editArticleID)
  .delete(AdminController.deleteArticleID)

router.route('/admin/comments/:id')
  .delete(AdminController.deleteCommentID)


router.route('/admin/messages/:id')
  .delete(AdminController.deleteMessageID)


//Export du Router
module.exports = router;