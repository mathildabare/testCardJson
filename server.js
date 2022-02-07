console.log("Mon app node js");

require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const port = process.env.PORT || 3004;
const {
  engine
} = require("express-handlebars");
const mysql = require('mysql');
const util = require("util");
const session = require('express-session');


// Config MySQL

const options = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
}


db = mysql.createConnection(options)

db.query = util.promisify(db.query).bind(db);

db.connect((err) => {
  if (err) console.error("error connecting: " + err.stack);
  console.log("connected as id " + db.threadId);
});

const MySQLStore = require('express-mysql-session')(session);

const sessionStore = new MySQLStore(options);



// CONFIG Session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    key: process.env.SESSION_KEY,
    resave: process.env.SESSION_RESAVE,
    saveUninitialized: process.env.SESSION_SAVEUNINITIALIZED,
    store: sessionStore
  }));


//Config Handlebars
app.set("view engine", "hbs");
app.engine("hbs", engine({
  extname: "hbs",
  defaultLayout: "main",
}));


//Config Method Override
app.use(methodOverride('_method'))


//Config Body-Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


//Config de la route vers dossier Static
app.use("/assets", express.static('public'));

//Admin / User
app.use('*', (req, res, next) => {
  if (req.session.user) res.locals.user = req.session.user
  // res.locals.isAdmin = req.session.isAdmin
  // console.log("cookie-session", req.session);
  next()
})


//Import Router
const ROUTER = require('./back/router')
app.use('/', ROUTER)


// Lancement de l'application sur le port .env
app.listen(port, () => {
  console.log("le serveur tourne sur le prt: " + port);
});