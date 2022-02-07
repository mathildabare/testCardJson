/*
 * Controller: Authentication
 * ************************** */

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
    password
  } = req.body;
  
  if (username && password) {
    const user = await db.query(
      `SELECT username, password FROM users WHERE username = '${username}';`
    );

    const match = await bcrypt.compare(password, user[0].password)

    console.log('match', match)

    if (match === true) {
      req.session.user = {
        username: {
          username: user[0].username
        },
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