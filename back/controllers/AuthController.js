/*
 * Controller: Authentication
 * ************************** */



/**** IMPORTS ****/

// DB
const fs = require("fs");
const path = require('path')
const directory = path.resolve("./public/images/Users")
const {deleteOneFile} = require('../utils/deleteOneFile')

// BCRYPT
const bcrypt = require('bcrypt');
const saltRounds = 10;



/** PAGES **/

// Page Login
exports.loginpage = (req, res) => {
  console.log("Je suis la page de connexion");
  res.render("login");
};

// Modal Login
exports.loginData = async (req, res) => {
  console.log("Mes identitifiants :", req.body);
  const { username, password  } = req.body;

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
    if (user[0].isBan === 1) {
      console.log('vous etes banni, charogne !');
    }
    if (user[0].isAdmin === 1) req.session.isAdmin === true
    res.redirect("/admin");
  }   else { 
    res.redirect('/')
  }

};

// Modal Logout
exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("math-session");
    console.log(req.session);
    res.redirect("/");
  });
};

// Page Register
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

// Page User
exports.userProfile = async (req, res) => {
  console.log('je suis la page user')
  console.log(req.session.user);

  res.render('user', {})
};

// Page de réinitialisation de mot de passe
exports.resetPassword = (req, res) => {
  console.log("Nouveau mot de passe : ", req.body);
  res.render("login");
};

// Page pour nouveau Password
exports.newpasswordpage = (req, res) => {
  console.log("Je suis la page de réinitialisation du mot de passe");
  res.render("newPW");
};

// Forgot Password
exports.forgotpasswordpage = (req, res) => {
  console.log("Je suis la page de mot de passe oublié");
  res.render("forgotPW");
};



/*
 * CRUD
 * **************************** */

// POST - Formulaire pour nouveau Password
exports.forgotPassword = (req, res) => {
  console.log("Données du compte pour le nouveau mot de passe : ", req.body);
  res.render("newPW");
};

// Créer un User (Register)
exports.createUser = async (req, res) => {
  console.log("Nouvel Utilisateur", req.body);
  const {username, mail, password} = req.body
  const hash = bcrypt.hashSync(password, saltRounds);

  console.log('mon hash', hash);

  await db.query(`
    insert into users (username, mail, password, avatar)
      VALUES ("${username}","${mail}","${hash}", "${req.file.filename}");`)
  res.redirect("/");
};

// Editer un User Profil
exports.editUser = async (req, res) => {

const { id } = req.session.user
const { username, biography } = req.body
const avatar = req.file

console.log('avatar', avatar , 'mon magnifique id', id);

const users = await db.query(`SELECT * FROM users WHERE id = '${req.params.id}';`);


if (username, biography) {
  await db.query(`UPDATE users SET username = '${username}', biography = '${biography}' WHERE id = '${req.params.id}';`)
}


if (avatar) {
  const dir = path.join('./public/images/Users')
  deleteOneFile(dir, users[0].avatar)
  await db.query(`UPDATE users SET avatar = '${req.file.filename}' WHERE id = '${req.params.id}';`)
}

console.log('mon USER', req.session.user);
  res.redirect('/user');

}
