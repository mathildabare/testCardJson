/*
 * Controller: CONTACT
 * ******************* */

/** PAGES **/


// Page Contact
exports.contactpage = async (req, res) => {
  console.log('je suis la page contact')
  const message = await db.query(`
  SELECT * FROM message;
`)
  res.render("contact");
};



// Création d'un message
exports.createMessage = async (req, res) => {
  console.log("Message du formulaire", req.body);
  const {
    name,
    mail,
    status,
    content
  } = req.body
  await db.query(`
    insert into message (name, mail, status, content)
      VALUES ("${name}","${mail}","${status}","${content}");
  `)
  res.render("contact");
}



// Page Société
exports.societypage = (req, res) => {
console.log("society-page");
res.render("society");
};

