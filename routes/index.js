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
  console.log(url)
  let c = querystring.decode(url)
  console.log(c.length)
  let code = Object.keys(c)
  res.render('index', { title: 'Api Gmail', code: c[0] });
});

module.exports = router;
