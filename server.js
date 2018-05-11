express = require("express");
bodyParser= require("body-parser");
exphbs= require("express-handlebars");
mysql= require("mysql");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes= require('./controllers/routes.js');
app.use('/',routes);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });