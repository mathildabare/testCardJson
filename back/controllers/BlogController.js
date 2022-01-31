/*
 * Controller: BLOG
 * **************** */

/** Database **/

//Import DB
const dbArticles = require("../../public/db.json").articles;
const fs = require("fs");

/** PAGES **/

// Page Article
exports.articlepage = (req, res) => {
  console.log("je suis la page article");
  res.render("article", {
    dbArticles,
  });
};  

// Page Article:ID
exports.pageArticleID = (req, res) => {
  console.log("je suis la page article");
  let article = {}
  dbArticles.forEach(art => {
    if (art.id === Number(req.params.id)) {
      article = art
    }
  })
  res.render("articleID", {
    article,
  });
};


// //Création d'un article




