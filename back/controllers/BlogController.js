/*
 * Controller: BLOG
 * **************** */



/**** IMPORTS ****/

const fs = require("fs");
const path = require('path')
const directory = path.resolve("./public/images/Articles")



/***** PAGES ******/

// Page Article
exports.articlepage = async (req, res) => {
  console.log("je suis la page article");

  res.render("article", {
    users: await db.query('select * from users'),
    articles: await db.query('select * from articles ORDER BY title')
  });
};

// Page Article:ID
exports.pageArticleID = async (req, res) => {
  const {
    id
  } = req.params
  console.log("je suis la page article/:id", req.params);

  const article = await db.query(`select * from articles where id = ${ id };`) //table articles + article.id
  const comments = await db.query(`select * from comments where article_id = ${ id };`) //table comments + article.id
  const tomes = await db.query(`
  SELECT  articles.name, tomes.name, tomes.number, tomes.img
  FROM articles 
  INNER JOIN tomes 
  ON articles.name = tomes.name 
  WHERE articles.id = ${req.params.id}
  ORDER BY tomes.number;`)


  console.log('article array', article)
  console.log('article obj', article[0])

  res.render("articleID", {
    article: article[0],
    comments, 
    tomes
  })
}



/***** CRUD ******/

// Créer un article
exports.createArticleUser = async (req, res) => {
  console.log("new article", req.body, req.params, req.query);
  const { title, genre_1, genre_2, synopsis } = req.body

  await db.query(`
    insert into articles (title, name, genre_1, genre_2, synopsis, img)
      VALUES ("${title}", "${title}", "${genre_1}","${genre_2}","${synopsis}", "${req.file.filename}");`)
  res.redirect("/article");
}

// Créer un Commentaire
exports.createComment = async (req, res) => {

  console.log("Commentaire user", req.body);

  const { content } = req.body
  const { id } = req.params
  const author = req.session.user.id
  console.log('my author', author);

  await db.query(`
    insert into comments (author_id, content, article_id)
    VALUES ("${author}","${content}", "${id}" );`)
  console.log(`article/${id}`);

  res.redirect(`/article/${ id }#comments`);
};


