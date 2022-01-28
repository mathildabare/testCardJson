/*
 * Controller: Authentication
 * ************************** */

/** PAGES **/

// Login
exports.loginpage = (req, res) => {
  console.log("Je suis la page de connexion");
  res.render("login");
};
exports.loginData = (req, res) => {
  console.log("Mes identitifiants :", req.body);
  res.render("register");
};

// Register
exports.registerpage = (req, res) => {
  console.log("Je suis la page d'inscription");
  res.render("register");
};
exports.createAccount = (req, res) => {
  console.log("Formulaire d'inscription :", req.body);
  res.render("register");
};

// Page de réinitialisation de mot de passe
exports.newpasswordpage = (req, res) => {
  console.log("Je suis la page de réinitialisation du mot de passe");
  res.render("newPW");
};
exports.resetPassword = (req, res) => {
  console.log("Nouveau mot de passe : ", req.body);
  res.render("login");
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