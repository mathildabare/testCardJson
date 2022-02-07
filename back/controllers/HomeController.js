/*
 * Controller: HOME
 * ***************** */


//Import DB
const fs = require("fs");


/** PAGES **/

// HOME
exports.homepage = async (req, res) => {
  console.log('je suis la page home')

  res.render("home", {
    message: await db.query('select * from messages'),
    articles: await db.query('select * from articles')
  });
  }



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
    insert into messages (name, mail, status, content)
      VALUES ("${name}","${mail}","${status}","${content}");
  `)
  res.render("home");
};