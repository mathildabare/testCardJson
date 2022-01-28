/*
 * Controller: CONTACT
 * ******************* */

/** PAGES **/


// Page Contact
exports.contactpage = (req, res) => {
console.log("je suis la page contact");
res.render("contact");
};
// Création d'un message
exports.createMessage = (req, res) => {
  console.log("je suis le controller create Message", req.body);
  res.render("contact");
};


// Page Société
exports.societypage = (req, res) => {
console.log("society-page");
res.render("society");
};

