module.exports = {
  coucou: (req, res, next) => {
    // console.log("Je suis le middleware coucou !");
    next();
  }
};
