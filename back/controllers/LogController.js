/*
 * Controller: Authentication
 * **************** */


// Login
exports.loginpage = (req, res) => {
  console.log("login-page");
  res.render("login");
};


// Register
exports.registerpage = (req, res) => {
  console.log("register-page");
  res.render("register");
};
exports.createAccount = (req, res) => {
  console.log("je suis le controller Create Account", req.body);
  res.render("register");
};



// New Password
exports.newpasswordpage = (req, res) => {
  console.log("newPW-page");
  res.render("newPW");
};
exports.resetPassword = (req, res) => {
  console.log("je suis le controller reset password", req.body);
  res.render("login");
};



// Forgot Password
exports.forgotpasswordpage = (req, res) => {
  console.log("forgotPW-page");
  res.render("forgotPW");
};

exports.forgotPassword = (req, res) => {
  console.log("je suis le controller send Password", req.body);
  res.render("newPW");
};
