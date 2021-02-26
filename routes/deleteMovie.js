const express = require("express");
const db = require("../models");
const router = express.Router();
const bodyParser = require("body-parser");
const methodOverride = require('method-override');

router.use(methodOverride('_method'))

router.use(bodyParser.urlencoded({ extended: false }));


//delete movie from watchList
router.delete ("/watch_later", function (req, res) {
    const id = req.params.movieId;
    db.watchList.destroy({
      where: { movieId: id }
    }).then(function(removed) {
       res.redirect('/watchLater')
    });
  });

  module.exports = router;
  