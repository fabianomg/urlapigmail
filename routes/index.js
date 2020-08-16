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
  let teste = 'https://apigmail.herokuapp.com/?code=4/3AH3Y3DTR7rd1-mmzv6muL5PK7V4bvMSsbayVBlLZZKWVCOZwU8vXl5lxlGtWbTJKrEQAIXpO3kjZxmiJcWIu7Q&scope=https://www.googleapis.com/auth/gmail.readonly'
  let c = querystring.decode(teste)
  let code = Object.keys(c)
  res.render('index', { title: 'Api Gmail', code: c[code[0]] });
});

module.exports = router;
