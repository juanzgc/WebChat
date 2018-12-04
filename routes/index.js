var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("index page");
  console.log(req.app.get('env'));

  // Https redirection for heroku app
  if (process.env.NODE_ENV === 'production') {
    if (req.headers['x-forwarded-proto'] != 'https') {
        return res.redirect('https://' + req.headers.host + req.url);
    } else {
      res.render('index', { 
        title: 'Express'
      });
    }
  } 
  else {
    res.render('index', { 
      title: 'Express'
    });
  }

});

module.exports = router;
