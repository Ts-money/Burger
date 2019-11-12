// Import Express Module
var express = require("express");

// Creates the Express Router
var router = express.Router();

// Import Burger model
var burger = require("../models/burger.js");

// Renders Index HTML
router.get("/", function (req, res) {
    
    burger.all(function (data) {
        var burgersObject = {
            burgers: data
        };
        console.log(burgersObject);
        
        res.render("index", burgersObject);
    });
});

// Shows all burgers
router.post("/api/burgers", function (req, res) {
    
    burger.insert(req.body.name, function (result) {
        
        res.json({ id: result.insertId });
        console.log("controller says: " + req.body.name);
    });
});

// Controls a specific burger given by ID.
router.put("/api/burgers/:id", function (req, res) {
    
    var condition = "id = " + req.params.id;
    devouredStatus = `devoured = ${req.body.devoured}`

    console.log("condition", condition);

    
    burger.update(devouredStatus, condition, function (result) {
        if (result.changedRows == 0) {
            
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router;