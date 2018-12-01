var express = require('express');
var router = express.Router();

/*
  Will be used as our controller page
*/



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
