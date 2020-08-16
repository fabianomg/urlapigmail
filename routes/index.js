var express = require('express');
var router = express.Router();
var url = require('url');
const querystring = require('querystring')

function fullUrl(req) {
  return url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname: req.originalUrl
  });
}
/* GET home page. */
router.get('/', function (req, res, next) {
  let url = fullUrl(req)
  let c = querystring.decode(url)
  let code = Object.keys(c)
  res.render('index', { title: 'Api Gmail', code: code });
});

module.exports = router;
