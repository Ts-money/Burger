// Imports Connection
var connection = require("../config/connection.js");

// ORM Object
var orm = {
    
    // Select All Function
    selectAll: function (table, cb) {
        
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });

    },
    
    // Insert One Function
    insertOne: function (table, valName, cb) {
            
            var queryString = `INSERT INTO ${table} (burger_name) VALUES (?)`;

            console.log(queryString);
            console.log("after queryString: " + valName);

            
            connection.query(queryString, [valName], function (err, result) {
                if (err) {
                    throw err;
                }
                cb(result);
            });
    },
    
    // Update One Function
    updateOne: function (table, columnSet, condition, cb) {
        
        var queryString = `UPDATE ${table} SET ${columnSet} WHERE ${condition}`;

        console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
    }
}

// Export ORM Module
module.exports = orm;