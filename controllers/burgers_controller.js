const express = require("express");

const router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.insertOne("burger_name",
    req.body.name, function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  let condition = "id = " + req.params.id;
  burger.updateOne({
    devoured: true
  }, {id: req.params.id}, function() {
    res.redirect("/");
  });
});

module.exports = router;