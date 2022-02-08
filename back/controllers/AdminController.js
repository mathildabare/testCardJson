/*
 * Controller: ADMIN
 * **************** */

const {DEC8_BIN} = require("mysql/lib/protocol/constants/charsets");


// Params Files
const fs = require("fs");
const path = require('path')
const directory = path.resolve("./public/images/Articles")


// Utils Files
const {deleteOneFile} = require('../utils/deleteOneFile')

const {updateFile} = require('../utils/updateFile')


// Page Admin
exports.get = async (req, res) => {
  res.render('admin', {
    layout: 'adminLayout',
    users: await db.query('select * from users'),
    articles: await db.query('select * from articles'),
    messages: await db.query('select * from messages'),
    comments: await db.query('select * from comments')
  })
}

/** CRUD **/

// BIO MODAL
exports.userBio = (req, res) => {
  console.log("user biography", req.body, req.params, req.query);
  res.redirect("/admin");
};

// USERS
exports.editUserID = async (req, res) => {
  console.log('edit User', req.body, req.params, req.query);

  await db.query(`
  UPDATE users
  SET username = '${req.body.username}', mail = '${req.body.mail}'
  WHERE id ='${req.params.id}';`);
  res.redirect('/admin#user');
}


// exports.banUserID = async (req, res) => {
//   console.log('ban User', req.params.id);

//   await db.query(`
//   UPDATE users
//   SET isBan = 1
//   WHERE id ='${req.params.id}';`);
//   console.log('banni !');
//   res.redirect('/admin#user');
// }


// ARTICLES
exports.createArticleAdmin = async (req, res) => {
  console.log("new article", req.body, req.params, req.file);
  const {
    title,
    genre_1,
    genre_2,
    synopsis
  } = req.body

  await db.query(`
    insert into articles (title, img, genre_1, genre_2, synopsis)
      VALUES ("${title}", "${req.file.filename}", "${genre_1}","${genre_2}","${synopsis}");
  `)


  res.redirect("/admin#blog");
}

exports.deleteArticleID = async (req, res) => {

  // On sélectionne l'article dans la DB pour le supprimer
  const article = await db.query(`select * from articles WHERE  id = ${ req.params.id };`)
  await db.query(`delete from articles where id = ${ req.params.id }`)


  // On cherche l'Img de l'article dans le Directory pour la supprimer
  const dir = path.join('./public/images/Articles')
  deleteOneFile(dir, article[0].img)

  console.log('delete article', req.body, req.params, req.query, req.file)
  res.redirect('/admin#blog');
}


exports.editArticleID = async (req, res) => {
  console.log("new article", req.body, req.params, req.query, req.file);

  await db.query(`
  UPDATE articles
  SET title = '${req.body.title}',
      genre_1 = '${req.body.genre_1}',
      genre_2  = '${req.body.genre_2}',
      synopsis = '${req.body.synopsis}',
      img= '${req.file.filename}'
  WHERE id ='${req.params.id}';`);


// //  const updateArticle = require('../utils/updateArticle')



console.log('update article', req.body, req.params, req.query, req.file)
res.redirect('/admin#blog');
}


// COMMENTS
exports.deleteCommentID = async (req, res) => {
  await db.query(`delete from comments where id = ${ req.params.id } `)
  console.log('delete comment', req.body, req.params, req.query)
  res.redirect('/admin#comments');
}


// MESSAGES
exports.deleteMessageID = async (req, res) => {
  await db.query(`delete from messages where id = ${ req.params.id } `)
  console.log('delete comment', req.body, req.params, req.query)
  res.redirect('/admin#messages');
}