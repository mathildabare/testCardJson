/*
 * Controller: HOME
 * ***************** */


/** PAGES **/

// HOME
exports.homepage = (req, res) => {
console.log('je suis la page home')
res.render("home");
};

// Création d'un message
exports.createMessage = (req, res) => {
  console.log("Message du formulaire", req.body);
  res.render("home");
};