/*
 * Controller: ADMIN
 * **************** */


// Admin
module.exports = {
  get: (req, res) => {
    res.render('admin', {

      layout: 'adminLayout'
    })
  }
}

exports.editArticle = (req, res) => {
  console.log("je suis le controller edit Article", req.body);
  res.render('admin')
}

