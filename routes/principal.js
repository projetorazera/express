var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/principal', function(req, res, next) {
  res.render('principal', { title: 'Principal' });
});


module.exports = router;
