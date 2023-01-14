var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "DY-Card", title2: "DY-Card Backend" });
});

module.exports = router;
