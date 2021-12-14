exports.homepage = (req, res) => {
    // console.log('je suis la page home')
  res.render("home");
};

exports.homepageID = (req, res) => {
    // console.log('params url', req.params.id)
    // console.log('je suis la page home')
  res.render("home");
};