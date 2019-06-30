var express = require("express");
var router = express.Router();
const neo4j = require("neo4j-driver").v1;
const driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "admin"));
const session = driver.session();

// Get entities
router.get("/entities", function(req, res, next) {
  session.run("MATCH (n:Syntax) RETURN n").then(response => {
    const artists = [];
    response.records.map(artist => {
      artists.push(artist._fields);
    });
    res.json(artists);
  });
});

// Add entities wip
router.get("/addEntity", function(req, res, next) {
  session.run("MATCH (n:Artist) RETURN n").then(response => {
    const artists = [];
    response.records.map(artist => {
      artists.push(artist._fields);
    });
    console.log("add entity");
    res.json(artists);
  });
});

module.exports = router;
