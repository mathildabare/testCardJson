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
  const { id } = req.params
  console.log("je suis la page article/:id", req.params);

  const article = await db.query(`select * from articles where id = ${ id };`)    //table articles + article.id
  const comments = await db.query(`select * from comments where article_id = ${ id };`)   //table comments + article.id

  console.log('article array', article)
  console.log('article obj', article[0])

  res.render("articleID", {
    article: article[0],
    comments
  })
}

// //Création d'un article

exports.createArticleUser = async (req, res) => {
  console.log("new article", req.body, req.params, req.query);
  const {title, genre_1, genre_2, synopsis} = req.body

  await db.query(`
    insert into articles (title, genre_1, genre_2, synopsis)
      VALUES ("${title}","${genre_1}","${genre_2}","${synopsis}");`)
  res.redirect("/article");
}

// //Commentaires

exports.createComment = async (req, res) => {
  console.log("Commentaire user", req.body);
  const { author_id, content } = req.body
  const { id } = req.params

  await db.query(`
    insert into comments (author_id, content, article_id)
    VALUES ("${author_id}","${content}", "${id}" );`)

  res.redirect(`article/${ id }`);
}

//Associer commentaire avec utilisateur


// const author = await db.query(
//   `SELECT users.username
//   FROM comments
//   INNER JOIN users 
//   ON users.id = author_id;`
// );