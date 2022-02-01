/*
 * Controller: BLOG
 * **************** */

/** Database **/

//Import DB
const fs = require("fs");

/** PAGES **/

// Page Article
exports.articlepage = async (req, res) => {
  console.log("je suis la page article");
  res.render("article", {    
  users: await db.query('select * from users'),
  articles: await db.query('select * from articles')
  });
};  

// Page Article:ID
exports.pageArticleID = async (req, res) => {
    console.log("je suis la page article/:id");
    res.render("articleID", {    
    users: await db.query('select * from users'),
    articles: await db.query('select * from articles'),
    comments: await db.query('select * from comments')
    })
  
  }
  
// //Création d'un article

exports.createArticleUser = async (req, res) => {
  console.log("new article", req.body, req.params, req.query);
  const {
    title,
    genre_1,
    genre_2,
    synopsis
  } = req.body
  await db.query(`
    insert into articles (title, genre_1, genre_2, synopsis)
      VALUES ("${title}","${genre_1}","${genre_2}","${synopsis}");
  `)
  res.redirect("/article");
}

// //Commentaires

exports.createComment = async (req, res) => {
  console.log("Commentaire user", req.body);
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
  res.render("contact");
}


//Associer commentaire avec utilisateur
























// const author = await db.query(
//   `SELECT users.username
//   FROM comments
//   INNER JOIN users 
//   ON users.id = author_id;`
// );