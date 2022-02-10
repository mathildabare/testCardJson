
/*
 *  PAGE 404  
 * ************ */

// Import du Router
const ROUTER = require('./back/router/router')
app.use('/', ROUTER)
// Met toute les autres page non défini en 404
app.use('*',function(req, res){
  res.status(404).render("error404",{
    title: `${process.env.ETP} - Error 404`,
    layout: 'err'
  });
});
