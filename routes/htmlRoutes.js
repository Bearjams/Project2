var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
      console.log(dbExamples)
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get("/search", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("search", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  app.get("/random", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("random", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
