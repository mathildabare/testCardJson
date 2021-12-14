exports.contactpage = (req, res) => {
  // console.log("je suis la page contact");
  res.render("contact");
};

exports.createMessage = (req, res) => {
  console.log("je suis le controller create Message", req.body);
  res.render("contact");
};

exports.editMessage = (req, res) => {
  console.log("je suis le controller edit Message", req.params.id, req.body);
  res.render("contact");
};

// exports.deleteMessage = (req, res) => {
//   console.log("je suis le controller delete Message", req.params.id);
//   res.render("contact");
// };
