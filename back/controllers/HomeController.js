/*
 * Controller: HOME
 * ***************** */

/** PAGES **/

// HOME
exports.homepage = async (req, res) => {
  console.log('je suis la page home')
  const message = await db.query(`
  SELECT * FROM messages;
`)
  console.log('message', message)
  res.render("home");
};

// Création d'un message
exports.createMessage = async (req, res) => {
  console.log("Message du formulaire", req.body);
  const {name, mail, status, content} = req.body

  await db.query(`
    insert into messages (name, mail, status, content)
      VALUES ("${name}","${mail}","${status}","${content}");
  `)
  res.render("home");
};
