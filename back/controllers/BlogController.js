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
// //Création d'un article

// exports.createArticle = (req, res) => {
//   console.log("Create Message", req.body);
//   const newArticle = {
//     id: dbArticles.length + 1,
//     title: req.body.title,
//     img: req.body.img,
//     description: req.body.description,
//   };

//   dbArticles.push(newArticle);

//   let data = JSON.stringify({ articles: dbArticles }, null, 2);

//   fs.writeFile("./public/db.json", data, (err) => {
//     if (err) console.log(err);
//     console.log("Fichier Json Créé");
//   });

//   res.render("article", {
//     dbArticles,
//   }, console.log("controller edit article" , req.body ));
// };

// //Edition d'un article
// exports.editArticle = (req, res) => {
//   console.log("je suis le controller edit Article", req.params.id, req.body);
//   let index = 0
//   const articleEdited = {
//     id: Number(req.params.id),
//     img: req.body.img,
//     title: req.body.title,
//     description: req.body.description
//   }

//   dbArticles.forEach(art => {
//     // console.log('loop', typeof art.id, typeof req.params.id)
//     if (art.id === Number(req.params.id)) {
//       console.log('indexof', dbArticles.indexOf(art))
//       index = dbArticles.indexOf(art)
//     }
//   })

//   dbArticles.splice(index, index -1, articleEdited)
//   dbArticles.slice(dbArticles.splice(index + 1, 1))

//   let data = JSON.stringify({ articles: dbArticles }, null, 2);

//   fs.writeFile("./public/db.json", data, (err) => {
//     if (err) console.log(err);
//     console.log("Fichier Json Créé");
//   });


//   // res.render("article", {dbArticles});
//   res.redirect('/article')
// };


// //Suppression d'un article
// exports.deleteArticle = (req, res) => {
//   console.log("je suis le controller delete Article", req.params.id, req.body);

//   let index = 0

//   dbArticles.forEach(art => {
//     // console.log('loop', typeof art.id, typeof req.params.id)
//     if (art.id === Number(req.params.id)) {
//       console.log('indexof', dbArticles.indexOf(art))
//       index = dbArticles.indexOf(art)
//     }
//   })

//   console.log('index', index)

//   dbArticles.slice(dbArticles.splice(index, 1))


//   let data = JSON.stringify({ articles: dbArticles }, null, 2);

//   fs.writeFile("./public/db.json", data, (err) => {
//     if (err) console.log(err);
//     console.log("Fichier Json Créé");
//   });


//   res.render("article", {dbArticles});
// };





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