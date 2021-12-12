var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

/* GET message page */
router.get('/new', (req, res) => {
  res.render('form', { title: "Message form"});
});

/* POST message form*/
router.post('/new', (req, res) => {
  messages.push(
    {
      text: req.body.msgText,
      user: req.body.usrName,
      added: new Date()
    }
  );
  res.redirect('/');
});

module.exports = router;
