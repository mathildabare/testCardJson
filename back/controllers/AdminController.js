/*
 * Controller: ADMIN
 * **************** */

const {
  DEC8_BIN
} = require("mysql/lib/protocol/constants/charsets");

const fs = require("fs");

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

// ARTICLES
exports.createArticleAdmin = async (req, res) => {
  console.log("new article", req.body, req.params,  req.file);
  const {title, genre_1, genre_2, synopsis} = req.body
  
  await db.query(`
    insert into articles (title, img, genre_1, genre_2, synopsis)
      VALUES ("${title}", "${req.file.filename}", "${genre_1}","${genre_2}","${synopsis}");
  `)
  res.redirect("/admin#blog");
}

exports.editArticleID = async (req, res) => {
  console.log("new article", req.body, req.params, req.query, req.file);

  await db.query(`
  UPDATE articles
  SET title = '${req.body.title}',
      genre_1 = '${req.body.genre_1}',
      genre_2  = '${req.body.genre_2}',
      genre_1 = '${req.body.genre_1}',
      synopsis = '${req.body.synopsis}'
  WHERE id ='${req.params.id}';`);
  res.redirect('/admin#blog');
}

exports.deleteArticleID = async (req, res) => {
  await db.query(`delete from articles where id = ${ req.params.id } `)
  console.log('delete article', req.body, req.params, req.query, req.file)
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
