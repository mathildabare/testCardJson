console.log("Mon app node js");

require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const port = process.env.PORT || 3004;
const { engine } = require("express-handlebars");

const mysql = require('mysql');
db = mysql.createConnection ({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME
})

const util = require("util");
db.query = util.promisify(db.query).bind(db);

db.connect((err) => {
  if (err) console.error("error connecting: " + err.stack);
  console.log("connected as id " + db.threadId);
});


app.set("view engine", "hbs");
app.engine("hbs", engine({
    extname: "hbs",
    defaultLayout: "main",
  })
);

app.use(methodOverride('_method'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use("/assets", express.static('public'));


const ROUTER = require('./back/router')
app.use('/', ROUTER)

// Lancement de l'application
app.listen(port, () => {
  console.log("le serveur tourne sur le prt: " + port);
});
