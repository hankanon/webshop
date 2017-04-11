var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  // res.sendfile(path.join(__dirname,'../public','index.html'));
  next();
});

router.get('/index', function(req, res) {
  res.sendfile(path.join(__dirname,'../public','index.html'));
});
module.exports = router;
