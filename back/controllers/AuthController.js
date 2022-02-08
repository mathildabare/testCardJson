/*
 * Controller: Authentication
 * ************************** */


//Import DB
const fs = require("fs");
const path = require('path')
const directory = path.resolve("./public/images/Users")


//BCRYPT
const bcrypt = require('bcrypt');
const saltRounds = 10;

/** PAGES **/

// Login
exports.loginpage = (req, res) => {
  console.log("Je suis la page de connexion");
  res.render("login");
};


//LOG MODAL (POST)
exports.loginData = async (req, res) => {
  console.log("Mes identitifiants :", req.body);
  const {
    username,
    password  } = req.body;

  if (username && password) {
    const user = await db.query(
      `SELECT * FROM users WHERE username = '${username}';`
    );

    const match = await bcrypt.compare(password, user[0].password)

    console.log('match', match)
    console.log("try", user);

    if (match === true) {
      req.session.user = {
        // username: {
        //   username: user[0].username
        // },
        id: user[0].id,
        username: user[0].username,
        biography: user[0].biography,
        password: user[0].password,
        mail: user[0].mail,
        avatar: user[0].avatar,
        isAdmin: user[0].isAdmin,
      }
    };
    if (user[0].isAdmin === 1) req.session.isAdmin === true
    res.redirect("/");
  } else {
    res.redirect('/')
  }

};


//LOGOUT
exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("math-session");
    console.log(req.session);
    res.redirect("/");
  });
};


// Register
exports.registerpage = async (req, res) => {
  console.log('je suis la page register')
  const user = await db.query(`
  SELECT * FROM users;`)
  console.log('user', user)

  const {
    username,
    password
  } = req.body;

  res.render("register");

};

exports.createUser = async (req, res) => {
  console.log("Nouvel Utilisateur", req.body);
  const {
    username,
    mail,
    password
  } = req.body
  const hash = bcrypt.hashSync(password, saltRounds);

  console.log('mon hash', hash);

  await db.query(`
    insert into users (username, mail, password)
      VALUES ("${username}","${mail}","${hash}");`)
  res.redirect("/");
};


// Page de réinitialisation de mot de passe
exports.resetPassword = (req, res) => {
  console.log("Nouveau mot de passe : ", req.body);
  res.render("login");
};

exports.newpasswordpage = (req, res) => {
  console.log("Je suis la page de réinitialisation du mot de passe");
  res.render("newPW");
};

// Forgot Password
exports.forgotpasswordpage = (req, res) => {
  console.log("Je suis la page de mot de passe oublié");
  res.render("forgotPW");
};

exports.forgotPassword = (req, res) => {
  console.log("Données du compte pour le nouveau mot de passe : ", req.body);
  res.render("newPW");
};


// USER


// Page User
exports.userProfile = async (req, res) => {
  console.log('je suis la page user')
  console.log(req.session.user);

  res.render('user', {})};


// Edit User
exports.editUser = async (req, res) => {

const { username, biography, avatar} = req.body
const {id,  isAdmin } = req.session.user

const user = await db.query(`SELECT * FROM users WHERE id = ${req.params.id}`);

// fs - readdir

console.log('mon fichier', req.file.filename);

  await db.query(`
  UPDATE users
  SET username= '${username}', biography = '${biography}', avatar = '${req.file.filename}'
  WHERE username ='${req.session.user.username}';`);
  res.redirect('/user');

}

