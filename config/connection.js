// Import MySQL
var mysql = require("mysql");

// Import MySQL Connection Details Config
//var conf = require("./conf.js");

// Create empty connection object
var connection;

// Creates Connection
connection = mysql.createConnection('mysql://ounbftbosqay3edk:ykfz4cgmssp5h8km@lolyz0ok3stvj6f0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/oy18o1vtsndj7kbu');

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