/*
 * Controller: ADMIN
 * **************** */


// Page Admin
exports.get = (req, res) => {
  const users = [{
    id: 1,
    name: 'brunooooo',
    mail: 'fzregf@fzeooooo.fr'
  },{
    id: 2,
    name: 'bruno',
    mail: 'fzregf@fze.fr'
  }]
  const articles = [{
        id: 1,
    title: 'wowowow', 
    description:'wowowowowowoowwowowow'
  },{
    id: 2,
  title: 'wowowow2', 
  description:'wowowowowowoowwowowow2'
}]
const bio = [{
  id: 1,
  description: 'fzregf@wowowowowowoowwowowowwowowowowowoowwowowowfzeooooofr'
}]
const comments = [{
id: 1,
username:'Draco Malefoy',
content: "kldjvmljnfqivgkr,noefsziregk"
},{
  id: 2,
  username:'Math Shingyouji',
  content: "kldjvmljnfqivgkr,noefsziregk"
}]

    res.render('admin', {
      layout: 'adminLayout',
      users, articles, bio, comments
    })
}


/** CRUD **/


// //BIO MODAL
exports.userBio = (req, res) => {
  console.log("user biography", req.body, req.params, req.query);
  res.redirect("/admin");
};


exports.editUserID = (req, res) => {
  console.log('edit User', req.body, req.params, req.query)
  res.redirect('/admin#user')
}

exports.editArticleID = (req, res) => {

  console.log('edit article', req.body, req.params, req.query)
  res.redirect('/admin#blog');
}

exports.createArticle = (req, res) => {
  console.log("article creation", req.body);
  res.render("admin");
};

exports.deleteCommentID = (req, res) => {

  console.log('delete comment', req.body, req.params, req.query)
  res.redirect('/admin#messages');
}
