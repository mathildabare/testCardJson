/*
 * Controller: Authentication
 * ************************** */

/** PAGES **/

// Login
exports.loginpage = (req, res) => {
  console.log("Je suis la page de connexion");
  res.render("login");
};

//LOG MODAL
exports.loginData = (req, res) => {
  console.log("Mes identitifiants :", req.body);
  res.render("home");
};

// Register
exports.registerpage = async (req, res) => {
  console.log('je suis la page register')
  const user = await db.query(`
  SELECT * FROM users;`)
  console.log('user', user)

  res.render("register");
};

exports.createUser = async (req, res) => {
  console.log("Nouvel Utilisateur", req.body);
  const { username, mail, password} = req.body

  await db.query(`
    insert into users (username, mail, password)
      VALUES ("${username}","${mail}","${password}");`)
  res.render("register");
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