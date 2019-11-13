// Import MySQL
var mysql = require("mysql");

// Import MySQL Connection Details Config
//var conf = require("./conf.js");

// Create empty connection object
var connection;

// Creates Connection
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
  //connection = mysql.createConnection(conf);
}

// Connects to database.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Exports connection module
module.exports = connection;