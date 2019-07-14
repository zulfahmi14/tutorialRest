let express = require('express');
let router = express.Router();
let app = express();
let bookRoute = require('./book');
let usersRoute = require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.use(router);
app.use('/book',bookRoute);
app.use('/user',usersRoute);

module.exports = app;