/*
 * Controller: ADMIN
 * **************** */


// Page Admin
module.exports = {
  get: (req, res) => {
    res.render('admin', {
      layout: 'adminLayout'
    })
  }
}


/** CRUD **/


// //Edition d'un article

// exports.editArticle = (req, res) => {
//   console.log("je suis le controller edit Articles", req.body);
//   res.render('admin')
// }


// //Création d'un article

// exports.createArticle = (req, res) => {
//   console.log("je suis le controller create article", req.body);
//   res.render("admin");
// };
