// Import Express Module
var express = require("express");

// Define port for server to run on
var PORT = process.env.PORT || 3000;

// Gets express instance
var app = express();

app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Imports Handle Bars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Imports Burger Controller
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Starts up Express Server on defined port
app.listen(PORT, function() {
  
  console.log("Server listening on: http://localhost:" + PORT);
});
